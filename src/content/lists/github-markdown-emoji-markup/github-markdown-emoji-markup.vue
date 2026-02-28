<template>
  <c-content-page>
    <div class="emoji-markup-table-wrap">
      <page-content />
    </div>
  </c-content-page>
</template>

<script setup lang="ts">
import CContentPage from '@/ui/c-content-page/c-content-page.vue';
import PageContent from './github-markdown-emoji-markup.md';
</script>

<style scoped>
.emoji-markup-table-wrap {
  overflow-x: auto;
}

.emoji-markup-table-wrap :deep(table) {
  width: 100%;
  table-layout: fixed;
}

.emoji-markup-table-wrap :deep(th),
.emoji-markup-table-wrap :deep(td) {
  width: 33.333%;
  white-space: normal;
  word-break: break-word;
}
</style>
