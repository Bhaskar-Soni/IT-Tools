<script setup lang="ts">
const markdown = ref('Sample _formatted_ **text**.\n');
const textareaRef = ref<HTMLTextAreaElement | null>(null);
const previewRef = ref<HTMLElement | null>(null);
const scrollSync = ref(true);

const stats = computed(() => {
  const text = markdown.value ?? '';
  return {
    chars: text.length,
    words: text.trim() ? text.trim().split(/\s+/).length : 0,
    lines: text.split('\n').length,
  };
});

function withSelection(handler: (value: string, start: number, end: number) => { text: string; selectionStart: number; selectionEnd: number }) {
  const el = textareaRef.value;
  if (!el) {
    return;
  }
  const start = el.selectionStart ?? 0;
  const end = el.selectionEnd ?? 0;
  const { text, selectionStart, selectionEnd } = handler(markdown.value, start, end);
  markdown.value = text;
  nextTick(() => {
    el.focus();
    el.setSelectionRange(selectionStart, selectionEnd);
  });
}

function wrapSelection(prefix: string, suffix = prefix) {
  withSelection((value, start, end) => {
    const before = value.slice(0, start);
    const selected = value.slice(start, end) || 'text';
    const after = value.slice(end);
    const newText = `${before}${prefix}${selected}${suffix}${after}`;
    const newStart = start + prefix.length;
    const newEnd = newStart + selected.length;
    return { text: newText, selectionStart: newStart, selectionEnd: newEnd };
  });
}

function insertLine(line: string) {
  withSelection((value, start) => {
    const before = value.slice(0, start);
    const after = value.slice(start);
    const prefix = before.endsWith('\n') || before.length === 0 ? '' : '\n';
    const suffix = after.startsWith('\n') || after.length === 0 ? '' : '\n';
    const newText = `${before}${prefix}${line}${suffix}${after}`;
    const cursor = (before + prefix + line).length;
    return { text: newText, selectionStart: cursor, selectionEnd: cursor };
  });
}

function onEditorScroll() {
  if (!scrollSync.value || !textareaRef.value || !previewRef.value) {
    return;
  }
  const el = textareaRef.value;
  const ratio = el.scrollTop / (el.scrollHeight - el.clientHeight || 1);
  previewRef.value.scrollTop = ratio * (previewRef.value.scrollHeight - previewRef.value.clientHeight);
}
</script>

<template>
  <div class="markdown-editor">
    <div class="editor-shell">
      <div class="toolbar">
        <button class="tool-btn" type="button" title="Bold" @click="wrapSelection('**')">B</button>
        <button class="tool-btn" type="button" title="Italic" @click="wrapSelection('*')">I</button>
        <button class="tool-btn" type="button" title="Strike" @click="wrapSelection('~~')">S</button>
        <span class="tool-sep" />
        <button class="tool-btn" type="button" title="Heading" @click="insertLine('# Heading')">H</button>
        <button class="tool-btn" type="button" title="Quote" @click="insertLine('> Quote')">❝</button>
        <button class="tool-btn" type="button" title="List" @click="insertLine('- Item')">•</button>
        <span class="tool-sep" />
        <button class="tool-btn" type="button" title="Inline code" @click="wrapSelection('`')">{ }</button>
        <button class="tool-btn" type="button" title="Code block" @click="insertLine('```\\ncode\\n```')">/</button>
        <button class="tool-btn" type="button" title="Link" @click="wrapSelection('[text](', ')')">⤴</button>
        <button class="tool-btn" type="button" title="Image" @click="insertLine('![alt](url)')">▣</button>
        <button class="tool-btn" type="button" title="Table" @click="insertLine('| A | B |\\n| - | - |\\n| 1 | 2 |')">▦</button>
        <span class="tool-sep" />
        <button class="tool-btn" type="button" title="Horizontal rule" @click="insertLine('---')">―</button>
        <div class="toolbar-spacer" />
        <label class="tool-toggle">
          <input v-model="scrollSync" type="checkbox">
          <span>Scroll Auto</span>
        </label>
      </div>

      <div class="pane-grid">
        <div class="pane editor-pane">
          <textarea
            ref="textareaRef"
            v-model="markdown"
            class="editor-textarea"
            spellcheck="false"
            @scroll="onEditorScroll"
          />
        </div>
        <div ref="previewRef" class="pane preview-pane">
          <c-markdown :markdown="markdown" />
        </div>
      </div>

      <div class="statusbar">
        <span>Character Count: {{ stats.chars }}</span>
        <span>Words: {{ stats.words }}</span>
        <span>Lines: {{ stats.lines }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.markdown-editor {
  width: 100%;
  max-width: none;
  margin: 0 auto;
}

.editor-shell {
  width: 100%;
}

.editor-shell {
  border: 1px solid var(--border-color);
  background: #0a0d12;
  box-shadow: 0 0 0 1px #000 inset;
}

.toolbar {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 12px;
  background: #000;
  border-bottom: 1px solid var(--border-color);
}

.tool-btn {
  height: 28px;
  min-width: 28px;
  padding: 0 6px;
  border-radius: 4px;
  border: 1px solid #1c1f26;
  background: #0d1117;
  color: var(--text-secondary);
  font-size: 12px;
  cursor: pointer;
}

.tool-btn:hover {
  color: var(--text-accent);
  border-color: #2b313b;
}

.tool-sep {
  width: 1px;
  height: 18px;
  background: #1f242d;
  margin: 0 4px;
}

.toolbar-spacer {
  flex: 1;
}

.tool-toggle {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--text-secondary);
  font-size: 12px;
}

.pane-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  border-bottom: 1px solid var(--border-color);
}

.pane {
  min-height: 420px;
  max-height: 70vh;
  overflow: auto;
}

.editor-pane {
  border-right: none;
}

.preview-pane {
  background: #05070b;
  padding: 16px 18px;
  border-top: 1px solid #0f131a;
}

.editor-textarea {
  width: 100%;
  height: 100%;
  min-height: 420px;
  resize: vertical;
  border: none;
  outline: none;
  background: #05070b;
  color: var(--text-primary);
  padding: 16px 18px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
  font-size: 14px;
  line-height: 1.6;
}

.statusbar {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 8px 12px;
  font-size: 12px;
  color: var(--text-secondary);
  background: #0a0d12;
}

@media (min-width: 980px) {
  .pane-grid {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  }

  .editor-pane {
    border-right: 1px solid var(--border-color);
  }

  .preview-pane {
    border-top: none;
  }
}
</style>
