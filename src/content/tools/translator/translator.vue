<script setup lang="ts">

import type { TranslationPipeline, TranslationSingle } from '@huggingface/transformers';
import { useQueryParamOrStorage } from '@/composable/queryParams';

let pipelineFn: ((task: string, modelId: string) => Promise<TranslationPipeline>) | null = null;
let transformersEnv: { useBrowserCache: boolean; allowRemoteModels: boolean } | null = null;

// State
const inputText = ref('');
const translatedText = ref('');
const error = ref('');
const sourceLang = useQueryParamOrStorage({ name: 'from', storageName: 'translator:from', defaultValue: 'en' });
const targetLang = useQueryParamOrStorage({ name: 'to', storageName: 'translator:to', defaultValue: 'fr' });
const loadingModel = ref(false);
const translating = ref(false);
const status = ref('');
const useRemoteApi = ref(true);

// Language options
const languageOptions = [
  { label: "Afrikaans", value: 'af' },
  { label: "Amharic", value: 'am' },
  { label: "Arabic", value: 'ar' },
  { label: "Azerbaijani", value: 'az' },
  { label: "Basque", value: 'eu' },
  { label: "Belarusian", value: 'be' },
  { label: "Bengali", value: 'bn' },
  { label: "Bulgarian", value: 'bg' },
  { label: "Catalan", value: 'ca' },
  { label: "Chinese", value: 'zh' },
  { label: "Croatian", value: 'hr' },
  { label: "Czech", value: 'cs' },
  { label: "Danish", value: 'da' },
  { label: "Dutch", value: 'nl' },
  { label: "English", value: 'en' },
  { label: "Estonian", value: 'et' },
  { label: "Finnish", value: 'fi' },
  { label: "French", value: 'fr' },
  { label: "Galician", value: 'gl' },
  { label: "Georgian", value: 'ka' },
  { label: "German", value: 'de' },
  { label: "Greek", value: 'el' },
  { label: "Hebrew", value: 'he' },
  { label: "Hindi", value: 'hi' },
  { label: "Hungarian", value: 'hu' },
  { label: "Icelandic", value: 'is' },
  { label: "Indonesian", value: 'id' },
  { label: "Irish", value: 'ga' },
  { label: "Italian", value: 'it' },
  { label: "Japanese", value: 'ja' },
  { label: "Kazakh", value: 'kk' },
  { label: "Korean", value: 'ko' },
  { label: "Latvian", value: 'lv' },
  { label: "Lithuanian", value: 'lt' },
  { label: "Macedonian", value: 'mk' },
  { label: "Malay", value: 'ms' },
  { label: "Norwegian", value: 'no' },
  { label: "Persian", value: 'fa' },
  { label: "Polish", value: 'pl' },
  { label: "Portuguese", value: 'pt' },
  { label: "Romanian", value: 'ro' },
  { label: "Russian", value: 'ru' },
  { label: "Serbian", value: 'sr' },
  { label: "Slovak", value: 'sk' },
  { label: "Slovenian", value: 'sl' },
  { label: "Spanish", value: 'es' },
  { label: "Swahili", value: 'sw' },
  { label: "Swedish", value: 'sv' },
  { label: "Tamil", value: 'ta' },
  { label: "Telugu", value: 'te' },
  { label: "Thai", value: 'th' },
  { label: "Turkish", value: 'tr' },
  { label: "Ukrainian", value: 'uk' },
  { label: "Urdu", value: 'ur' },
  { label: "Vietnamese", value: 'vi' },
  { label: "Welsh", value: 'cy' },
];

const languageNames = languageOptions.reduce((acc, { value, label }) => {
  acc[value] = label;
  return acc;
}, {} as Record<string, string>);

const langPairs = {
  af: ['en'],
  ar: ['en'],
  cs: ['en'],
  da: ['de', 'en'],
  de: ['en', 'es', 'fr'],
  en: [
    'af', 'ar', 'cs', 'da', 'de', 'es', 'fi', 'fr', 'hi', 'hu', 'id', 'it',
    'jap', 'nl', 'ro', 'ru', 'sv', 'uk', 'vi', 'xh', 'zh',
  ],
  es: ['de', 'en', 'fr', 'it', 'ru'],
  et: ['en'],
  fi: ['de', 'en'],
  fr: ['de', 'en', 'es', 'ro', 'ru'],
  hi: ['en'],
  hu: ['en'],
  id: ['en'],
  it: ['en', 'es', 'fr'],
  ja: ['en'],
  jap: ['en'],
  ko: ['en'],
  nl: ['en', 'fr'],
  no: ['de'],
  pl: ['en'],
  ro: ['fr'],
  ru: ['en', 'es', 'fr', 'uk'],
  sv: ['en'],
  th: ['en'],
  tr: ['en'],
  uk: ['en', 'ru'],
  vi: ['en'],
  xh: ['en'],
  zh: ['en'],
};

const fromLanguages = computed(() => {
  return Object.keys(langPairs).map(lang => ({ label: languageNames[lang] || lang, value: lang }));
});
const toLanguages = computed(() => {
  const toLangs = langPairs[sourceLang.value as keyof typeof langPairs] || [];
  if (!toLangs.includes(targetLang.value)) {
    targetLang.value = toLangs[0];
  }
  return toLangs.map(lang => ({ label: languageNames[lang] || lang, value: lang }));
});

// Cache the loaded model
const translators = new Map<string, TranslationPipeline>();

async function withSuppressedWarnings<T>(fn: () => Promise<T>) {
  const originalWarn = console.warn;
  const originalInfo = console.info;
  const originalLog = console.log;
  const shouldSuppress = (args: any[]) => {
    const message = args.map(a => String(a)).join(' ');
    if (
      message.includes('MarianTokenizer')
      || message.includes('dtype not specified')
      || message.includes('powerPreference option is currently ignored')
    ) {
      return true;
    }
    return false;
  };
  console.warn = (...args: any[]) => {
    if (shouldSuppress(args)) return;
    originalWarn(...args);
  };
  console.info = (...args: any[]) => {
    if (shouldSuppress(args)) return;
    originalInfo(...args);
  };
  console.log = (...args: any[]) => {
    if (shouldSuppress(args)) return;
    originalLog(...args);
  };
  try {
    return await fn();
  }
  finally {
    console.warn = originalWarn;
    console.info = originalInfo;
    console.log = originalLog;
  }
}

async function translateViaMyMemory(text: string) {
  const langpair = `${sourceLang.value}|${targetLang.value}`;
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${encodeURIComponent(langpair)}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Translation API error (${res.status})`);
  }
  const data = await res.json();
  const translated = data?.responseData?.translatedText;
  if (!translated) {
    throw new Error('Translation API returned no result.');
  }
  return translated as string;
}

// Translation logic
async function translateText() {
  status.value = 'Starting translation...';
  if (!inputText.value.trim()) {
    error.value = 'Please enter some text to translate.';
    status.value = 'Idle';
    return;
  }

  if (sourceLang.value === targetLang.value) {
    error.value = 'Source and target languages must be different.';
    status.value = 'Idle';
    return;
  }

  translatedText.value = '';
  error.value = '';

  const modelId = `Xenova/opus-mt-${sourceLang.value}-${targetLang.value}`;

  if (useRemoteApi.value) {
    translating.value = true;
    status.value = 'Translating via remote API...';
    try {
      translatedText.value = await translateViaMyMemory(inputText.value);
      status.value = 'Done';
      return;
    }
    catch (e: any) {
      error.value = `Remote translation failed: ${e.toString()}`;
      status.value = 'Remote translation failed.';
    }
    finally {
      translating.value = false;
    }
  }

  if (!pipelineFn) {
    try {
      status.value = 'Loading translator engine...';
      const mod = await import('@huggingface/transformers');
      pipelineFn = mod.pipeline as typeof pipelineFn;
      transformersEnv = mod.env as typeof transformersEnv;
      if (transformersEnv) {
        transformersEnv.useBrowserCache = true;
        transformersEnv.allowRemoteModels = true;
        // Reduce noisy console warnings if supported by the lib
        if ('logLevel' in transformersEnv) {
          // @ts-expect-error optional env field
          transformersEnv.logLevel = 'error';
        }
      }
    }
    catch (e: any) {
      error.value = `Translator engine unavailable: ${e.toString()}`;
      status.value = 'Failed to load translator engine.';
      return;
    }
  }

  // Load model if not already loaded
  if (!translators.has(modelId)) {
    loadingModel.value = true;
    status.value = `Loading model ${modelId}...`;

    try {
      // @ts-expect-error Probably a Typescript bug 'too complex type'
      translators.set(
        modelId,
        await withSuppressedWarnings(() => pipelineFn!('translation', modelId)) as TranslationPipeline,
      );
    }
    catch (e: any) {
      error.value = `Model loading failed: ${e.toString()}`;
      status.value = 'Model loading failed.';
      return;
    }
    finally {
      loadingModel.value = false;
    }
  }

  // Translate
  translating.value = true;
  status.value = 'Translating...';
  try {
    const translator = translators.get(modelId);
    if (typeof translator !== 'function') {
      throw new Error('Translator pipeline not initialized.');
    }
    const result = await withSuppressedWarnings(() => translator(inputText.value));
    translatedText.value = (result[0] as TranslationSingle)?.translation_text;
    status.value = 'Done';
  }
  catch (e: any) {
    error.value = `Translation failed: ${e.toString()}`;
    status.value = 'Translation failed.';
  }
  finally {
    translating.value = false;
  }
}
</script>

<template>
  <div max-w-600px>
    <NInput v-model:value="inputText" type="textarea" placeholder="Enter text to translate..." mb-1 />

    <c-select v-model:value="sourceLang" searchable label="From:" label-position="left" label-width="70px" :options="fromLanguages" placeholder="From" mb-1 />
    <c-select v-model:value="targetLang" searchable label="To:" label-position="left" label-width="70px" :options="toLanguages" placeholder="To" mb-1 />

    <n-space justify="center" mb-2 mt-2>
      <NButton type="primary" :disabled="loadingModel || translating" @click="translateText">
        Translate
      </NButton>
    </n-space>

    <n-space justify="center" mb-2>
      <n-switch v-model:value="useRemoteApi" />
      <n-text>Use remote API</n-text>
    </n-space>

    <n-space justify="center" mb-3 mt-3>
      <NSpin v-if="loadingModel" size="large" description="Loading translation model..." />
      <NSpin v-if="translating" size="large" description="Translating..." />
    </n-space>
    <n-text v-if="status" depth="3">{{ status }}</n-text>

    <c-alert v-if="error" mb-2>
      {{ error }}
    </c-alert>

    <textarea-copyable v-if="translatedText" v-model:value="translatedText" placeholder="Translation will appear here..." mb-2 />
  </div>
</template>
