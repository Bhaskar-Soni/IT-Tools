<script setup lang="ts">

const wordWrap = ref(false);
const ignoreTrailingWhitespaces = ref(false);
</script>

<template>
  <div w-full>
    <n-space justify="center" mb-3>
      <n-checkbox v-model:checked="wordWrap">
        Word Wrap?
      </n-checkbox>
      <n-checkbox v-model:checked="ignoreTrailingWhitespaces">
        Ignore Trailing Whitespaces?
      </n-checkbox>
    </n-space>
    <c-card w-full min-w-0 important:flex-1 important:pa-0>
      <c-diff-editor :options="{ wordWrap: wordWrap ? 'on' : 'off', ignoreTrimWhitespace: ignoreTrailingWhitespaces }" />
    </c-card>
  </div>
</template>
