<script setup lang="ts">

import JSON5 from 'json5';
import { encode } from '@toon-format/toon';
import type { UseValidationRule } from '@/composable/validation';
import { withDefaultOnError } from '@/utils/defaults';

const defaultValue = `{
  users: [
    { id: 1, name: 'Alice', role: 'admin' },
    { id: 2, name: 'Bob', role: 'user' }
  ]
}`;

function transformer(value: string) {
  return withDefaultOnError(() => {
    if (value === '') {
      return '';
    }
    return encode(JSON5.parse(value));
  }, '');
}

const rules: UseValidationRule<string>[] = [
  {
    validator: (v: string) => v === '' || JSON5.parse(v),
    message: "Provided JSON is not valid.",
  },
];
</script>

<template>
  <format-transformer
    input-label="Your raw JSON:"
    :input-default="defaultValue"
    input-placeholder="Paste your raw JSON here..."
    output-label="TOON version of your JSON:"
    :input-validation-rules="rules"
    :transformer="transformer"
    download-file-name="output.toon"
  />
</template>
