<script setup lang="ts">
import '@/monaco-setup';
import * as monaco from 'monaco-editor';
import { useStyleStore } from '@/stores/style.store';

const props = withDefaults(defineProps<{
  value?: string;
  language?: string;
  theme?: string;
  height?: string;
  options?: monaco.editor.IStandaloneEditorConstructionOptions;
}>(), {
  value: '',
  language: 'plaintext',
  height: '300px',
  options: () => ({}),
});

const emit = defineEmits<{
  (e: 'update:value', value: string): void;
}>();

const editorContainer = ref<HTMLElement | null>(null);
let editor: monaco.editor.IStandaloneCodeEditor | null = null;
let isSettingValue = false;

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
const resolvedTheme = computed(() => props.theme ?? (styleStore.isDarkTheme ? 'it-tools-dark' : 'it-tools-light'));

const setEditorValue = (value: string) => {
  if (!editor) {
    return;
  }
  if (value === editor.getValue()) {
    return;
  }
  isSettingValue = true;
  editor.setValue(value);
  isSettingValue = false;
};

watch(
  () => resolvedTheme.value,
  theme => monaco.editor.setTheme(theme),
  { immediate: true },
);

watch(
  () => props.options,
  options => editor?.updateOptions(options ?? {}),
  { immediate: true, deep: true },
);

watch(
  () => props.value,
  value => setEditorValue(value ?? ''),
);

watch(
  () => props.language,
  language => {
    const model = editor?.getModel();
    if (model) {
      monaco.editor.setModelLanguage(model, language ?? 'plaintext');
    }
  },
);

useResizeObserver(editorContainer, () => {
  editor?.layout();
});

onMounted(() => {
  if (!editorContainer.value) {
    return;
  }

  editor = monaco.editor.create(editorContainer.value, {
    value: props.value ?? '',
    language: props.language ?? 'plaintext',
    minimap: { enabled: false },
    ...props.options,
  });

  editor.onDidChangeModelContent(() => {
    if (!editor || isSettingValue) {
      return;
    }
    emit('update:value', editor.getValue());
  });
});

onBeforeUnmount(() => {
  if (editor) {
    editor.getModel()?.dispose();
    editor.dispose();
    editor = null;
  }
});
</script>

<template>
  <div class="monaco-editor-wrapper" :style="{ height }">
    <div ref="editorContainer" class="monaco-editor" />
  </div>
</template>

<style scoped>
.monaco-editor-wrapper {
  width: 100%;
  overflow: hidden;
}

.monaco-editor {
  width: 100%;
  height: 100%;
}
</style>
