<script setup lang="ts">

import dwGen from 'diceware-generator';
import enWL from 'diceware-wordlist-en';
import enEffWL from 'diceware-wordlist-en-eff';
import jpWL from 'diceware-wordlist-jp';
import spWL from 'diceware-wordlist-sp';
import sweWL from 'diceware-wordlist-swe';
import { computedRefreshable } from '@/composable/computedRefreshable';
import { useQueryParamOrStorage } from '@/composable/queryParams';
import { useCopy } from '@/composable/copy';

const count = useQueryParamOrStorage({ name: 'count', storageName: 'diceware-generator:count', defaultValue: 1 });
const words = useQueryParamOrStorage({ name: 'words', storageName: 'diceware-generator:words', defaultValue: 5 });
const lang = useQueryParamOrStorage({ name: 'lang', storageName: 'diceware-generator:lang', defaultValue: 'en' });

const langs = [
  { value: 'en', label: "English" },
  { value: 'en-eff', label: "English EFF" },
  { value: 'sp', label: "Spanish" },
  { value: 'jp', label: "Japanese" },
  { value: 'swe', label: "Swedish" },
];

const [dicewares, refreshDicewares] = computedRefreshable(
  () => Array.from({ length: count.value },
    () => {
      let language = enWL;
      switch (lang.value) {
        case 'en-eff':
          language = enEffWL;
          break;
        case 'sp':
          language = spWL;
          break;
        case 'jp':
          language = jpWL;
          break;
        case 'swe':
          language = sweWL;
          break;
      }
      return dwGen({
        language,
        wordcount: words.value,
        format: 'string',
      });
    }).join('\n'),
);

const { copy } = useCopy({ source: dicewares, text: "Diceward Passwords copied to clipboard!" });
</script>

<template>
  <div>
    <c-card>
      <n-space>
        <n-form-item :label="`Words (${words})`" label-placement="left">
          <n-slider v-model:value="words" :step="1" :min="1" :max="512" mr-2 />
          <NInputNumber v-model:value="words" size="small" />
        </n-form-item>

        <n-form-item label="Number of Diceware passwords to generate:" label-placement="left">
          <NInputNumber v-model:value="count" size="small" />
        </n-form-item>
      </n-space>

      <c-select
        v-model:value="lang"
        label="Languages:"
        label-position="left"
        :options="langs"
        mb-4
      />

      <c-input-text
        v-model:value="dicewares"
        label="Generated passwords:"
        multiline
        placeholder="Diceware passwords..."
        readonly
        rows="3"
        autosize
        class="diceware-display"
        word-wrap
      />

      <div mt-5 flex justify-center gap-3>
        <c-button @click="copy()">
          Copy
        </c-button>
        <c-button @click="refreshDicewares">
          Refresh
        </c-button>
      </div>
    </c-card>
  </div>
</template>

<style scoped lang="less">
::v-deep(.diceware-display) {
  textarea {
    text-align: center;
  }
}
</style>
