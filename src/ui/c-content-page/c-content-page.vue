<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    maxWidth?: number | string
  }>(),
  {
    maxWidth: 760,
  },
);

const normalizedMaxWidth = computed(() => {
  if (typeof props.maxWidth === 'number') {
    return `${props.maxWidth}px`;
  }

  return props.maxWidth;
});
</script>

<template>
  <div class="c-content-page" :style="{ '--content-page-max-width': normalizedMaxWidth }">
    <div class="c-content-page-inner">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="less">
.c-content-page {
  width: 100%;
  min-width: 0;
}

.c-content-page-inner {
  width: 100%;
  max-width: var(--content-page-max-width, 920px);
  margin: 0 auto;
  color: #89909c !important;
}

/* Ensure all markdown nodes in slotted content inherit the same base tone */
.c-content-page-inner ::v-deep(*) {
  color: #89909c !important;
}

:global(.tool-content > .c-content-page) {
  flex: 0 1 var(--content-page-max-width, 920px) !important;
  max-width: var(--content-page-max-width, 920px) !important;
}

::v-deep(h1),
::v-deep(h2),
::v-deep(h3) {
  margin-top: 26px;
  margin-bottom: 10px;
  color: #89909c !important;
}

::v-deep(h4),
::v-deep(h5),
::v-deep(h6) {
  color: #89909c !important;
}

::v-deep(p) {
  margin-bottom: 10px;
  color: #89909c !important;
}

::v-deep(ul),
::v-deep(ol) {
  margin: 0 0 14px;
  padding-left: 18px;
}

::v-deep(li) {
  margin-bottom: 8px;
  line-height: 1.45;
  color: #89909c !important;
}

::v-deep(strong),
::v-deep(b) {
  color: #89909c !important;
  font-weight: 500;
}

::v-deep(em),
::v-deep(i) {
  color: #89909c !important;
}

::v-deep(code) {
  font-family: 'Cascadia Code', 'Consolas', 'Courier New', monospace;
  background-color: #0d1320;
  border: 1px solid #1a2435;
  border-radius: 6px;
  padding: 2px 8px;
  color: #9298a1 !important;
}

::v-deep(pre) {
  margin: 0 0 16px;
  padding: 14px 18px;
  background-color: #0d1320;
  border: 1px solid #1a2435;
  border-radius: 6px;
  max-width: 100%;
  box-sizing: border-box;
  overflow-x: auto;
  color: #9298a1 !important;
}

::v-deep(pre code) {
  background: transparent;
  border: 0;
  border-radius: 0;
  padding: 0;
}

::v-deep(table) {
  border-collapse: collapse;
  width: 100%;
  display: block;
  overflow-x: auto;
}

::v-deep(td),
::v-deep(th) {
  border: 1px solid #2f3a4a;
  padding: 6px 8px;
  color: #89909c !important;
}

::v-deep(th) {
  color: #89909c !important;
  font-weight: 500;
}

::v-deep(a) {
  color: #9bb0cf !important;
}
</style>
