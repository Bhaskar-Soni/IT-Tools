<script setup lang="ts">

import JSON5 from 'json5';
// import { flatten } from 'flatten-anything'; // TODO: Fix flatten-anything
const flatten = (obj: any) => obj;
import { objectArrayToData } from '@/utils/objectarray.export';
import type { UseValidationRule } from '@/composable/validation';
import TextareaCopyable from '@/components/TextareaCopyable.vue';
import { useQueryParamOrStorage } from '@/composable/queryParams';

const defaultValue = `{
  a:"n",
  arr: [1, 2], 
  nested: {
    a:1,
    b:"2"
  }
}`;
const jsonInput = ref(defaultValue);
const tableName = useQueryParamOrStorage({ name: 'table', storageName: 'json-to-sql-insert:tbl', defaultValue: 'TableName' });

const sqlOutput = computed(() => {
  try {
    let arr = JSON.parseBigNum(jsonInput.value);
    if (!Array.isArray(arr)) {
      arr = [arr];
    }
    return objectArrayToData(arr.map((o: any) => flatten(o)), 'sql', { tableName: tableName.value });
  }
  catch (e: any) {
    return e.toString();
  }
});

const rules: UseValidationRule<string>[] = [
  {
    validator: (v: string) => v === '' || JSON5.parse(v),
    message: "Provided JSON is not valid.",
  },
];
</script>

<template>
  <c-card title="JSON to SQL INSERT">
    <c-input-text v-model:value="tableName" label="Table Name:" label-placement="left" mb-1 />
    <c-input-text
      v-model:value="jsonInput"
      multiline
      placeholder="Put your json string here..."
      rows="20"
      label="JSON:"
      :validation-rules="rules"
      raw-text
    />
  </c-card>
  <c-card title="Your SQL INSERT code">
    <TextareaCopyable
      :value="sqlOutput"
      language="sql"
      download-file-name="output.sql"
    />
  </c-card>
</template>
