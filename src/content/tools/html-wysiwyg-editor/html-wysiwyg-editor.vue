<script setup lang="ts">

import { minify, prettify } from 'htmlfy';
import { toStrictXhtml } from '../html-to-xhtml/html-to-xhtml.service';
import Editor from './editor/editor.vue';
import TextareaCopyable from '@/components/TextareaCopyable.vue';
import { useITStorage, useQueryParamOrStorage } from '@/composable/queryParams';

const html = useITStorage('html-wysiwyg-editor--html', '<h1>Hey!</h1><p>Welcome to this html wysiwyg editor</p>');

const xhtmlOutput = useQueryParamOrStorage({ name: 'xhtml', storageName: 'html-wysiwyg-editor--xhtml', defaultValue: false });
const minifyOutput = useQueryParamOrStorage({ name: 'minify', storageName: 'html-wysiwyg-editor--min', defaultValue: false });

const formattedHtml = computed(() => {
  try {
    let htmlValue = html.value;
    if (xhtmlOutput.value) {
      htmlValue = toStrictXhtml(htmlValue);
    }
    if (minifyOutput.value) {
      return minify(htmlValue);
    }

    return prettify(htmlValue);
  }
  catch {
    return html.value;
  }
});
</script>

<template>
  <details>
    <summary>Click here to paste or edit raw html</summary>
    <c-input-text
      v-model:value="html"
      multiline raw-text
      placeholder="Your Html content..."
      rows="8"
      autofocus
      label="Your Html to convert (can paste from clipboard):"
      paste-html
    />
  </details>
  <Editor v-model:html="html" />
  <NSpace justify="center">
    <n-form-item label="Minify:" label-placement="left" mt-2>
      <NSwitch v-model:value="minifyOutput" />
    </n-form-item>
    <n-form-item label="XHtml:" label-placement="left" mt-2>
      <NSwitch v-model:value="xhtmlOutput" />
    </n-form-item>
  </NSpace>
  <TextareaCopyable :value="formattedHtml" language="html" download-file-name="output.htm" />
</template>
