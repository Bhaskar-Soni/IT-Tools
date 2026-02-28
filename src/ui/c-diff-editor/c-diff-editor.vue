<script setup lang="ts">
import '@/monaco-setup';
import * as monaco from 'monaco-editor';
import { useStyleStore } from '@/stores/style.store';

const props = withDefaults(defineProps<{ options?: monaco.editor.IDiffEditorOptions }>(), { options: () => ({}) });
const { options } = toRefs(props);

const editorContainer = ref<HTMLElement | null>(null);
let editor: monaco.editor.IStandaloneDiffEditor | null = null;

monaco.editor.defineTheme('it-tools-dark', {
  base: 'vs-dark',
  inherit: true,
  rules: [],
  colors: {
    'editor.background': '#161b22',
    'editorStickyScroll.background': '#161b22',
  },
});

monaco.editor.defineTheme('it-tools-light', {
  base: 'vs',
  inherit: true,
  rules: [],
  colors: {
    'editor.background': '#edeff5',
    'editorStickyScroll.background': '#edeff5',
  },
});

const styleStore = useStyleStore();

watch(
  () => styleStore.isDarkTheme,
  isDarkTheme => monaco.editor.setTheme(isDarkTheme ? 'it-tools-dark' : 'it-tools-light'),
  { immediate: true },
);

watch(
  () => options.value,
  options => editor?.updateOptions(options),
  { immediate: true, deep: true },
);

useResizeObserver(editorContainer, () => {
  editor?.layout();
});

onMounted(() => {
  if (!editorContainer.value) {
    return;
  }

  editor = monaco.editor.createDiffEditor(editorContainer.value, {
    originalEditable: true,
    minimap: {
      enabled: false,
    },
    renderSideBySide: true,
    useInlineViewWhenSpaceIsLimited: false,
    enableSplitViewResizing: true,
  });

  editor.setModel({
    original: monaco.editor.createModel('original text', 'txt'),
    modified: monaco.editor.createModel('modified text', 'txt'),
  });
});
</script>

<template>
  <div class="diff-editor-wrapper">
    <div ref="editorContainer" class="diff-editor" />
  </div>
</template>

<style scoped>
.diff-editor-wrapper {
  width: 100%;
  overflow: auto;
}

.diff-editor {
  width: 100%;
  min-width: 900px;
  height: 80vh;
}
@media (max-width: 980px) {
  .diff-editor {
    min-width: 720px;
  }
}
@media (max-width: 760px) {
  .diff-editor {
    min-width: 600px;
  }
}
</style>
