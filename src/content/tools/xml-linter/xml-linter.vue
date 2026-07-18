<script setup lang="ts">

import { XMLParser } from 'fast-xml-parser';

const parser = new XMLParser();

const xmlContent = ref('');
const lintErrors = computed(() => {
  const xml = xmlContent.value?.trim();
  try {
    if (xml) {
      parser.parse(xml, true);
    }
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
    <n-card title="Your XML Content:" mb-2>
      <div relative w-full>
        <c-monaco-editor
          v-model:value="xmlContent"
          theme="vs-dark"
          height="250px"
          language="xml"
          :options="MONACO_EDITOR_OPTIONS"
        />
      </div>
    </n-card>

    <div v-if="lintErrors">
      <n-alert type="error" title="Linting Error" :show-icon="true">
        <pre>{{ lintErrors }}</pre>
      </n-alert>
    </div>
    <div v-else-if="xmlContent">
      <n-alert type="success" title="Valid XML" :show-icon="true">
        No errors found. Your XML is valid!
      </n-alert>
    </div>
  </div>
</template>
