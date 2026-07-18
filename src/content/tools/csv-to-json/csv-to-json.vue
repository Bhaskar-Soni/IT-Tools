<script setup lang="ts">

import { convertCsvToArray } from './csv-to-json.service';
import FormatTransformer from '@/components/FormatTransformer.vue';
import type { UseValidationRule } from '@/composable/validation';
import { withDefaultOnError } from '@/utils/defaults';

const typedValues = ref(false);

function transformer(value: string) {
  return withDefaultOnError(() => {
    if (value === '') {
      return '';
    }
    return JSON.stringify(convertCsvToArray(value, typedValues.value), null, 2);
  }, '');
}

const rules: UseValidationRule<string>[] = [
  {
    validator: (v: string) => v === '' || ((v.includes(',') || v.includes(';') || v.includes('\t') || v.includes('|')) && v.includes('\n')),
    message: "Provided CSV is not valid.",
  },
];
</script>

<template>
  <n-form-item label="Typed Values" label-placement="left">
    <n-checkbox v-model:checked="typedValues" />
  </n-form-item>
  <FormatTransformer
    input-label="Your raw CSV"
    input-placeholder="Paste your raw CSV here..."
    output-label="JSON version of your CSV"
    :input-validation-rules="rules"
    :transformer="transformer"
  />
</template>
