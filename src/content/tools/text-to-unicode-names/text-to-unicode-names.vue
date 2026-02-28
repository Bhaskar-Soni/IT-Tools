<script setup lang="ts">

import { convertTextToUnicodeNames } from './text-to-unicode-names.service';
import { useQueryParam } from '@/composable/queryParams';

const inputText = useQueryParam({ tool: 'text-to-unicode-names', name: 'text', defaultValue: '' });
const unicodeNamesFromText = computed(() => convertTextToUnicodeNames(inputText.value, { separator: '\n' }));
</script>

<template>
  <c-card title="Text to Unicode Names">
    <c-input-text
      v-model:value="inputText"
      multiline placeholder="e.g. 'Hello world'"
      label="Enter text to convert to Unicode Names"
      autosize autofocus raw-text
    />
    <textarea-copyable
      v-model:value="unicodeNamesFromText"
      word-wrap
      label="Unicode Names from your text" multiline raw-text readonly mt-2
      placeholder="The Unicode Names representation of your text will be here"
    />
  </c-card>
</template>
