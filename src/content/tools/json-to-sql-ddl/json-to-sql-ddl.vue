<script setup lang="ts">

import JSON5 from 'json5';
import GenerateSchema from 'generate-schema';
import { withDefaultOnError } from '@/utils/defaults';
import type { UseValidationRule } from '@/composable/validation';
import { useQueryParamOrStorage } from '@/composable/queryParams';

const tableName = useQueryParamOrStorage({ name: 'table', storageName: 'json-to-sqlddl:tbl', defaultValue: 'TableName' });

function convertJsonToDDL(value: string) {
  const object = JSON5.parse(value);
  return GenerateSchema.mysql(tableName.value, object);
}
const transformer = (value: string) => value.trim() === '' ? '' : withDefaultOnError(() => convertJsonToDDL(value), '');

const rules: UseValidationRule<string>[] = [
  {
    validator: (v: string) => v === '' || JSON5.parse(v),
    message: "Provided JSON is not valid.",
  },
];
</script>

<template>
  <div>
    <c-input-text
      v-model:value="tableName"
      label="Table Name"
      placeholder="Table Name"
      mb-2
    />
    <n-divider />

    <format-transformer
      input-label="Your JSON"
      input-placeholder="Paste your JSON here..."
      output-label="Your SQL DDL"
      output-language="sql"
      :input-validation-rules="rules"
      :transformer="transformer"
    />
  </div>
</template>
