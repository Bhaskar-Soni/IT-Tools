<script lang="ts" setup>


import * as XLSX from 'xlsx';
import { objectArrayToData } from '@/utils/objectarray.export';
import type { ExportFormat } from '@/utils/objectarray.export';
import { useQueryParamOrStorage } from '@/composable/queryParams';

const workbook = ref<XLSX.WorkBook | null>(null);
const convertedData = ref<string>('');
const selectedFormat = useQueryParamOrStorage({ name: 'fmt', storageName: 'excel-to-data:fmt', defaultValue: 'json' });
const tableName = useQueryParamOrStorage({ name: 'table', storageName: 'excel-to-data:tbl', defaultValue: 'TableName' });
const nestify = ref(false);
const sheetName = ref('');
const error = ref('');

const formats = [
  { label: "JSON", value: 'json' },
  { label: "YAML", value: 'yaml' },
  { label: "SQL INSERT", value: 'sql' },
  { label: "CSV (comma)", value: 'csv' },
  { label: "CSV (semicolon)", value: 'csv_semicolon' },
  { label: "CSV (tab)", value: 'tsv' },
  { label: "Markdown", value: 'markdown' },
  { label: "XML", value: 'xml' },
];

async function handleFileUpload(file: File) {
  error.value = '';
  workbook.value = null;
  sheetName.value = '';
  try {
    workbook.value = XLSX.read(await file.arrayBuffer(), { type: 'binary' });
    sheetName.value = workbook.value.SheetNames[0];
  }
  catch (e: any) {
    error.value = e.toString();
  }
}

function convertFile() {
  if (!workbook.value) {
    return;
  }
  const data = XLSX.utils.sheet_to_json(workbook.value.Sheets[sheetName.value]);
  if (!data.length || !selectedFormat.value) {
    return;
  }

  convertedData.value = objectArrayToData(data, selectedFormat.value as ExportFormat, {
    tableName: tableName.value,
    nestify: nestify.value,
  });
};
</script>

<template>
  <NCard title="XLSX Converter">
    <c-file-upload
      title="Drag and drop a XLSX here, or click to select a file"
      accept=".xlsx"
      mb-3
      @file-upload="handleFileUpload"
    />

    <NFormItem v-if="workbook" label="Select Sheet to use:" label-placement="left">
      <NSelect v-model:value="sheetName" :options="workbook.SheetNames?.map((s) => ({ label: s, value: s }))" placeholder="Select sheet" />
    </NFormItem>

    <NFormItem label="Select output format:" label-placement="left">
      <NSelect v-model:value="selectedFormat" :options="formats" placeholder="Select format" />
    </NFormItem>

    <n-form-item label="Nestify ('a.b.c' to nested objects)" label-placement="left">
      <n-checkbox v-model:checked="nestify" />
    </n-form-item>

    <c-input-text v-if="selectedFormat === 'sql'" v-model:value="tableName" label="Table Name:" label-placement="left" />

    <div mt-3 flex justify-center>
      <NButton :disabled="!workbook" @click="convertFile">
        Convert
      </NButton>
    </div>

    <c-alert v-if="error">
      {{ error }}
    </c-alert>

    <c-card v-if="convertedData" title="Converted data">
      <textarea-copyable :value="convertedData" :language="selectedFormat" :download-file-name="`output.${selectedFormat}`" />
    </c-card>
  </NCard>
</template>
