<script setup lang="ts">

import markdownit from 'markdown-it';
import { generateLoremIpsum, getSupportedLanguages } from './lorem-ipsum-generator.service';
import { computedRefreshable } from '@/composable/computedRefreshable';
import { useCopy } from '@/composable/copy';
import { useQueryParamOrStorage } from '@/composable/queryParams';
import { randIntFromInterval } from '@/utils/random';

const paragraphs = useQueryParamOrStorage({ name: 'paragraphs', storageName: 'lorem:paragraphs', defaultValue: 1 });
const sentences = useQueryParamOrStorage({ name: 'sentences', storageName: 'lorem:sentences', defaultValue: [3, 8] });
const words = useQueryParamOrStorage({ name: 'words', storageName: 'lorem:words', defaultValue: [8, 15] });
const startWithLoremIpsum = ref(true);
const asHTML = useQueryParamOrStorage({ name: 'html', storageName: 'lorem:html', defaultValue: false });
const language = useQueryParamOrStorage({ defaultValue: 'English', storageName: 'lorem:lang', name: 'lang' });

const supportedLanguages = getSupportedLanguages();
const [loremIpsumText, refreshLoremIpsum] = computedRefreshable(() =>
  generateLoremIpsum({
    paragraphCount: paragraphs.value,
    asHTML: asHTML.value,
    sentencePerParagraph: randIntFromInterval(sentences.value[0], sentences.value[1]),
    wordCount: randIntFromInterval(words.value[0], words.value[1]),
    startWithLoremIpsum: startWithLoremIpsum.value,
    language: language.value,
  }),
);

const { copy } = useCopy({ source: loremIpsumText, text: "Lorem ipsum copied to the clipboard" });

function printLorem() {
  const w = window.open();
  if (w === null) {
    return;
  }
  w.document.body.innerHTML = markdownit().render(loremIpsumText.value || '');
  w.print();
}
</script>

<template>
  <c-card>
    <c-select
      v-model:value="language"
      searchable
      label="Language:"
      :options="Object.values(supportedLanguages)"
      mb-2
    />
    <n-form-item label="Paragraphs" :show-feedback="false" label-width="200" label-placement="left">
      <n-slider v-model:value="paragraphs" :step="1" :min="1" :max="20" />
    </n-form-item>
    <n-form-item label="Sentences per paragraph" :show-feedback="false" label-width="200" label-placement="left">
      <n-slider v-model:value="sentences" range :step="1" :min="1" :max="50" />
    </n-form-item>
    <n-form-item label="Words per sentence" :show-feedback="false" label-width="200" label-placement="left">
      <n-slider v-model:value="words" range :step="1" :min="1" :max="50" />
    </n-form-item>
    <n-form-item label="Start with lorem ipsum ?" :show-feedback="false" label-width="200" label-placement="left">
      <n-switch v-model:value="startWithLoremIpsum" />
    </n-form-item>
    <n-form-item label="As html ?" :show-feedback="false" label-width="200" label-placement="left">
      <n-switch v-model:value="asHTML" />
    </n-form-item>

    <c-input-text :value="loremIpsumText" multiline placeholder="Your lorem ipsum..." readonly mt-5 rows="5" />

    <div mt-5 flex justify-center gap-3>
      <c-button autofocus @click="copy()">
        Copy
      </c-button>
      <c-button @click="refreshLoremIpsum">
        Refresh
      </c-button>
      <c-button @click="printLorem">
        Print (ie, use a PDF Printer to get a PDF file)
      </c-button>
    </div>
  </c-card>
</template>
