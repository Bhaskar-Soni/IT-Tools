<script setup lang="ts">

import { parse as parseToml } from 'smol-toml';

const tomlContent = ref('');
const lintErrors = computed(() => {
  try {
    parseToml(tomlContent.value);
    return '';
  }
  catch (e: any) {
    return e.toString().trim();
  }
});

const MONACO_EDITOR_OPTIONS = {
  automaticLayout: true,
  formatOnType: true,
  formatOnPaste: true,
};
</script>

<template>
  <div>
    <n-card title="Your TOML Content:" mb-2>
      <div relative w-full>
        <c-monaco-editor
          v-model:value="tomlContent"
          theme="vs-dark"
          height="250px"
          :options="MONACO_EDITOR_OPTIONS"
        />
      </div>
    </n-card>

    <div v-if="lintErrors">
      <n-alert type="error" title="Linting Error" :show-icon="true">
        <pre>{{ lintErrors }}</pre>
      </n-alert>
    </div>
    <div v-else-if="tomlContent">
      <n-alert type="success" title="Valid TOML" :show-icon="true">
        No errors found. Your TOML is valid!
      </n-alert>
    </div>
  </div>
</template>
