<script setup lang="ts">

import { CliPrettify } from 'markdown-table-prettify';
import TextareaCopyable from '@/components/TextareaCopyable.vue';

const inputMarkdown = ref('');
const outputMarkdown = computed(() => {
  return CliPrettify.prettify(inputMarkdown.value);
});
</script>

<template>
  <div>
    <c-input-text
      v-model:value="inputMarkdown"
      multiline raw-text
      placeholder="Your Markdown table to prettify"
      rows="8"
      autofocus
      label="Markdown table to prettify"
    />

    <n-divider />

    <n-form-item label="Prettified Markdown">
      <TextareaCopyable :value="outputMarkdown" :word-wrap="true" language="markdown" download-file-name="output.md" />
    </n-form-item>
  </div>
</template>
