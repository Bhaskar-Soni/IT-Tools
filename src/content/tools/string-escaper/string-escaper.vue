<script setup lang="ts">

import TextareaCopyable from '@/components/TextareaCopyable.vue';
import { escapeForLanguage, languages } from '@/utils/ascii-lang-utils';
import { useQueryParam, useQueryParamOrStorage } from '@/composable/queryParams';

const rawInput = useQueryParam({ tool: 'string-escaper', name: 'text', defaultValue: 'Hello "every"\n A\'' });
const language = useQueryParamOrStorage({ name: 'lang', storageName: 'string-escaper:l', defaultValue: 'raw' });
const single_linize = useQueryParamOrStorage({ name: 'singleline', storageName: 'string-escaper:sl', defaultValue: false });
const languagesOptions = languages.map(lang => ({ value: lang.id, label: lang.name }));

const stringOutput = computed(() => escapeForLanguage(
  rawInput.value, language.value,
  { single_linize: single_linize.value }));
</script>

<template>
  <c-card title="String Escaper">
    <c-input-text
      v-model:value="rawInput"
      label="Your text:"
      placeholder="Your raw text to escape"
      raw-text
      multiline
      rows="4"
      mb-2
    />
    <c-select v-model:value="language" label="Target language:" :options="languagesOptions" searchable mb-2 />
    <n-space justify="center">
      <n-checkbox v-model:checked="single_linize">
        Single linize
      </n-checkbox>
    </n-space>
  </c-card>
  <c-card title="Your escaped string in target language">
    <TextareaCopyable
      :value="stringOutput"
    />
  </c-card>
</template>
