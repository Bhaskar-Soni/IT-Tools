<script setup lang="ts">

import { textToNatoAlphabet } from './text-to-nato-alphabet.service';
import { allLanguagesAndCountries } from './text-to-nato-alphabet.constants';
import { useCopy } from '@/composable/copy';
import { useQueryParam, useQueryParamOrStorage } from '@/composable/queryParams';

const lang = useQueryParamOrStorage({ name: 'lang', storageName: 'text-to-nato:lang', defaultValue: '(International)' });
const input = useQueryParam({ tool: 'text-to-nato', name: 'text', defaultValue: '' });
const useDigitsNames = useQueryParamOrStorage({ name: 'digits', storageName: 'text-to-nato:digits', defaultValue: false });
const usePunctuationsNames = useQueryParamOrStorage({ name: 'puncts', storageName: 'text-to-nato:puncts', defaultValue: false });
const natoText = computed(() => textToNatoAlphabet({ text: input.value, langOrCountry: lang.value }));
const { copy } = useCopy({ source: natoText, text: "NATO alphabet string copied." });
</script>

<template>
  <div>
    <c-select
      v-model:value="lang"
      :options="allLanguagesAndCountries"
      searchable
    />

    <div flex justify-center>
      <n-form-item label="Use digits pronunciation">
        <n-checkbox v-model:checked="usePunctuationsNames" />
      </n-form-item>
      <n-form-item label="Use punctuations pronunciation">
        <n-checkbox v-model:checked="useDigitsNames" />
      </n-form-item>
    </div>

    <c-input-text
      v-model:value="input"
      label="Your text to convert to NATO phonetic alphabet"
      placeholder="Put your text here..."
      clearable
      mb-5
    />

    <div v-if="natoText">
      <div mb-2>
        Your text in NATO phonetic alphabet ({{ lang }})
      </div>
      <c-card>
        {{ natoText }}
      </c-card>

      <div mt-3 flex justify-center>
        <c-button autofocus @click="copy()">
          Copy NATO string
        </c-button>
      </div>
    </div>
  </div>
</template>
