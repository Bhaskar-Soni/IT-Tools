<script setup lang="ts">

import { generateSQLFromTemplate } from './sql-parameters.service';
import { useQueryParamOrStorage } from '@/composable/queryParams';

const sqlTemplate = useQueryParamOrStorage({ name: 'sql', storageName: 'sql-params:sql', defaultValue: '' });
const parameters = ref([{ key: '', value: '' }]);

const generatedSQL = ref('');
const errorMessage = ref('');

function generateSQL() {
  const { sql, error } = generateSQLFromTemplate(
    sqlTemplate.value,
    parameters.value,
  );

  generatedSQL.value = sql;
  errorMessage.value = error || '';
}
</script>

<template>
  <NCard title="SQL Generator">
    <NForm label-placement="top">
      <NFormItem label="Parameterized SQL statement:">
        <NInput
          v-model:value="sqlTemplate"
          type="textarea"
          placeholder=">-"
          :autosize="{ minRows: 3 }"
        />
      </NFormItem>

      <n-card title="Parameters">
        <n-p>>-</n-p>
        <NDynamicInput
          v-model:value="parameters"
          :min="1"
          preset="pair"
          show-sort-button
          key-placeholder="Name (e.g. name or type)"
          value-placeholder="Value (e.g. Alice or 42 or 1.3)"
        />
      </n-card>

      <n-space justify="center">
        <NButton type="primary" @click="generateSQL">
          Generate SQL
        </NButton>
      </n-space>

      <NFormItem v-if="generatedSQL" label="Generated SQL:" mt-2>
        <textarea-copyable :value="generatedSQL" download-file-name="output.sql" />
      </NFormItem>

      <NAlert v-if="errorMessage" type="error" mt-2 @close="errorMessage = ''">
        {{ errorMessage }}
      </NAlert>
    </NForm>
  </NCard>
</template>
