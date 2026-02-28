<script setup lang="ts">

import { getTextFromHtml, validateHtml } from './extract-text-from-html.service';
import type { UseValidationRule } from '@/composable/validation';

function transformer(value: string) {
  if (value === '') {
    return '';
  }
  try {
    return getTextFromHtml(value);
  }
  catch (e: any) {
    return e.toString();
  }
}

const rules: UseValidationRule<string>[] = [
  {
    validator: (value: string) => value === '' || validateHtml(value),
    message: "Provided HTML is not valid.",
  },
];
</script>

<template>
  <format-transformer
    input-label="Your raw HTML"
    input-placeholder="Paste your raw HTML here..."
    output-label="Text from your HTML"
    :input-validation-rules="rules"
    :transformer="transformer"
  />
</template>
