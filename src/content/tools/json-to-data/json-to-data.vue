<script lang="ts" setup>

import * as XLSX from 'xlsx';
import JSON5 from 'json5';

import { objectArrayToData } from '@/utils/objectarray.export';
import type { ExportFormat } from '@/utils/objectarray.export';
import { useQueryParamOrStorage } from '@/composable/queryParams';

const inputType = ref<'file' | 'content'>('content');
const jsonContent = ref('');
const fileInput = ref() as Ref<File | null>;
const error = ref('');

const convertedData = ref<string>('');
const selectedFormat = useQueryParamOrStorage({ name: 'fmt', storageName: 'csv-to-data:fmt', defaultValue: 'yaml' });
const tableName = useQueryParamOrStorage({ name: 'table', storageName: 'csv-to-data:tbl', defaultValue: 'TableName' });
const nestify = ref(false);

const formats = [
  { label: "YAML", value: 'yaml' },
  { label: "SQL INSERT", value: 'sql' },
  { label: "CSV (comma)", value: 'csv' },
  { label: "CSV (semicolon)", value: 'csv_semicolon' },
  { label: "CSV (tab)", value: 'tsv' },
  { label: "Markdown", value: 'markdown' },
  { label: "XML", value: 'xml' },
  { label: "XLSX", value: 'xlsx' },
];

async function handleFileUpload(file: File) {
  if (file) {
    fileInput.value = file;
  }
}

function readFileAsString(file: File) {
  return new Promise<string>((resolve, reject) => {
    const fr = new FileReader();
    fr.onload = () => {
      resolve(fr.result as string || '');
    };
    fr.onerror = reject;
    fr.readAsText(file);
  });
}

async function convertFile() {
  let jsonContentValue = jsonContent.value;
  const file = fileInput.value;
  error.value = '';
  try {
    if (inputType.value === 'file' && file) {
      jsonContentValue = await readFileAsString(file);
    }

    let data = JSON5.parse(jsonContentValue);
    if (!Array.isArray(data)) {
      data = [data];
    }
    const outFormat = selectedFormat.value;
    if (outFormat === 'xlsx') {
      convertedData.value = '';
      downloadXLSX(data, tableName.value);
    }
    else {
      convertedData.value = objectArrayToData(data, outFormat as ExportFormat, {
        tableName: tableName.value,
        nestify: nestify.value,
      });
    }
  }
  catch (e: any) {
    error.value = e.toString();
    return null;
  }
};

function downloadXLSX<T extends Record<string, any>>(data: T[], fileName: string = 'data') {
  const worksheet = XLSX.utils.json_to_sheet(data);

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, fileName);

  XLSX.writeFile(workbook, `${fileName}.xlsx`);
}
</script>

<template>
  <NCard title="JSON Converter">
    <c-card>
      <n-radio-group v-model:value="inputType" name="radiogroup" mb-2 flex justify-center>
        <n-space>
          <n-radio
            value="file"
            label="File"
          />
          <n-radio
            value="content"
            label="Content"
          />
        </n-space>
      </n-radio-group>

      <c-file-upload
        v-if="inputType === 'file'"
        accept=".csv,.tsv"
        title="Drag and drop a JSON file here, or click to select a file"
        @file-upload="handleFileUpload"
      />

      <c-input-text
        v-if="inputType === 'content'"
        v-model:value="jsonContent"
        label="Paste your JSON content"
        placeholder="Your JSON"
        multiline
        rows="8"
        data-test-id="input"
      />
    </c-card>

    <n-space justify="center">
      <n-form-item label="Nestify ('a.b.c' to nested objects)" label-placement="left">
        <n-checkbox v-model:checked="nestify" />
      </n-form-item>
    </n-space>

    <NFormItem label="Select output format:" label-placement="left">
      <NSelect v-model:value="selectedFormat" :options="formats" placeholder="Select format" />
    </NFormItem>

    <c-input-text v-if="selectedFormat === 'sql'" v-model:value="tableName" label="Table Name:" label-placement="left" />

    <div mt-3 flex justify-center>
      <NButton :disabled="!((inputType === 'file' && fileInput) || jsonContent)" @click="convertFile">
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
