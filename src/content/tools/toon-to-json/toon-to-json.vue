<script setup lang="ts">

import { decode } from '@toon-format/toon';
import type { UseValidationRule } from '@/composable/validation';
import { withDefaultOnError } from '@/utils/defaults';

const defaultValue = `users[2]{id,name,role}:
  1,Alice,admin
  2,Bob,user`;

function transformer(value: string) {
  return withDefaultOnError(() => {
    if (value === '') {
      return '';
    }
    return JSON.stringify(decode(value), null, 2);
  }, '');
}

const rules: UseValidationRule<string>[] = [
  {
    validator: (v: string) => v === '' || decode(v),
    message: "Provided TOON is not valid",
  },
];
</script>

<template>
  <format-transformer
    input-label="Your raw TOON content:"
    :input-default="defaultValue"
    input-placeholder="Paste your raw TOON content here..."
    output-label="JSON version of your TOON content:"
    :input-validation-rules="rules"
    :transformer="transformer"
    download-file-name="output.json"
  />
</template>
