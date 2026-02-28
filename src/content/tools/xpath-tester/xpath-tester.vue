<script setup lang="ts">

import XPathEngine from 'xpath';
import { DOMParser } from '@xmldom/xmldom';
import { useValidation } from '@/composable/validation';
import { isNotThrowing } from '@/utils/boolean';
import { useQueryParam } from '@/composable/queryParams';

const xpath = useQueryParam({ tool: 'xpath-tester', name: 'xpath', defaultValue: '//title' });
const xml = ref('<book><title>Harry Potter</title></book>');

const selectedNodes = computed(() => {
  try {
    const doc = new DOMParser().parseFromString(xml.value, 'text/xml');
    const select = XPathEngine.useNamespaces(Object.fromEntries(
      [...xml.value.matchAll(/xmlns\:([^\=]+)\=["']([^"']+)["']/g)].map(
        ([_, prefix, uri]) => [prefix, uri],
      )));
    const result = select(xpath.value, doc);
    return Array.isArray(result) ? result : [result];
  }
  catch (e: any) {
    return [e.toString()];
  }
});

const xmlValidation = useValidation({
  source: xml,
  rules: [
    {
      validator: v => isNotThrowing(() => new DOMParser().parseFromString(v, 'text/xml')),
      message: "Provided XML is not valid.",
    },
  ],
});
</script>

<template>
  <div>
    <c-card title="Input" mb-2>
      <c-input-text
        v-model:value="xpath"
        label="XPath Expression"
        placeholder="Put your XPath expression here..."
        mb-2
      />

      <c-input-text
        v-model:value="xml"
        label="XML"
        multiline
        placeholder="Put your XML here..."
        rows="5"
        :validation="xmlValidation"
        mb-2
      />
    </c-card>

    <c-card title="Result(s)">
      <ul v-if="selectedNodes?.length > 0">
        <li v-for="(node, index) in selectedNodes" :key="index">
          {{ node }}
        </li>
      </ul>
      <c-alert v-if="!selectedNodes?.length">
        XPath expression selected nothing
      </c-alert>
    </c-card>
  </div>
</template>
