<script setup lang="ts">

import { type Faker, allFakers } from '@faker-js/faker';
import JSON5 from 'json5';
import { objectArrayToData } from '@/utils/objectarray.export';
import type { ExportFormat } from '@/utils/objectarray.export';
import type { UseValidationRule } from '@/composable/validation';
import { useQueryParamOrStorage } from '@/composable/queryParams';

const jsonInput = useQueryParamOrStorage({
  name: 'template',
  storageName: 'faker:tmpl',
  defaultValue: JSON.stringify({
    name: 'faker.person.fullName',
    email: 'faker.internet.email',
    address: {
      street: 'faker.location.streetAddress',
      city: 'faker.location.city',
      country: 'faker.location.country',
    },
    phone: 'faker.phone.number',
  }, null, 2),
});

const generatedData = ref<string>('');
const itemCount = useQueryParamOrStorage({ name: 'count', storageName: 'faker:c', defaultValue: 1 });
const error = ref('');
const selectedFormat = useQueryParamOrStorage({ name: 'fmt', storageName: 'faker:f', defaultValue: 'json' });
const tableName = useQueryParamOrStorage({ name: 'table', storageName: 'faker:t', defaultValue: 'TableName' });
const nestify = ref(false);

const allLocales = Object.keys(allFakers);
const selectedLocale = useQueryParamOrStorage({ name: 'locale', storageName: 'faker:l', defaultValue: 'en' });
const faker = computed(() => (allFakers as Record<string, Faker>)[selectedLocale.value]);

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

// Extract all faker methods dynamically
const fakerMethods = computed(() => {
  const methods: string[] = [];
  const fakerObj = (faker.value as Record<string, any>);
  Object.keys(fakerObj).forEach((category) => {
    if (typeof fakerObj[category] === 'object') {
      Object.keys(fakerObj[category]).forEach((method) => {
        methods.push(`faker.${category}.${method}`);
      });
    }
  });
  return methods.map(method => ({ label: method, value: method }));
});

// Selected faker method for insertion
const selectedMethod = ref<string>('');

function resolveFakerValue(value: string) {
  try {
    if (value.startsWith('faker.')) {
      const [, funcName, args] = /^([^\(]+)(?:\((.+)\))?$/.exec(value) || [];

      let argsArray: any[] = [];
      if (args?.trim()) {
        try {
          argsArray = JSON5.parse(`[${args}]`);
        }
        catch {
          try {
            argsArray = [JSON5.parse(`{${args}}`).options];
          }
          catch {
            throw new Error(`Unable to parse faker function options: ${args}`);
          }
        }
      }

      const fakerFunc = funcName.split('.').slice(1).reduce((acc: any, prop: string) => acc[prop], faker.value) as CallableFunction;
      if (fakerFunc === null) {
        throw new Error(`Cannot find faker function: ${funcName}`);
      }

      return fakerFunc(...argsArray);
    }
    return value; // raw value
  }
  catch (e: any) {
    return e.toString(); // in case, of error, emit error as value
  }
}

function generateFakeData(template: Record<string, any>): Record<string, any> {
  return Object.entries(template).reduce((result, [key, value]) => {
    result[key] = typeof value === 'object' && value !== null
      ? generateFakeData(value) // Recursive handling for nested objects
      : resolveFakerValue(value);
    return result;
  }, {} as Record<string, any>);
}

function handleGenerate() {
  try {
    error.value = '';
    const parsedTemplate = JSON.parse(jsonInput.value);
    generatedData.value = objectArrayToData(
      Array.from({ length: itemCount.value },
        () => generateFakeData(parsedTemplate)),
      selectedFormat.value as ExportFormat, {
        tableName: tableName.value,
        nestify: nestify.value,
      });
  }
  catch (e: any) {
    error.value = e.toString();
  }
}

function insertMethodIntoJson() {
  if (selectedMethod.value) {
    jsonInput.value = jsonInput.value.replace(/\n?\}$/, `,\n  "newField": "${selectedMethod.value}"\n}`);
  }
}

const rules: UseValidationRule<string>[] = [
  {
    validator: (v: string) => v === '' || JSON5.parse(v),
    message: "Provided JSON is not valid.",
  },
];
</script>

<template>
  <NCard title="Fake Data Generator">
    <c-input-text v-model:value="jsonInput" label="JSON Template:" multiline mb-1 rows="10" placeholder="Enter JSON template..." :validation-rules="rules" />

    <c-card title="Faker Method insertion" mb-1>
      <n-space>
        <c-select v-model:value="selectedMethod" style="width: 200px" :options="fakerMethods" searchable placeholder="Search Faker Method" />
        <NButton @click="insertMethodIntoJson">
          Insert Selected Method
        </NButton>
      </n-space>
    </c-card>

    <n-space mb-1>
      <NFormItem label="Number of objects to generate:" label-placement="left">
        <NInputNumber v-model:value="itemCount" :min="1" placeholder="Number of objects to generate" />
      </NFormItem>
      <n-form-item label="Nestify (handle nested objects)" label-placement="left">
        <n-checkbox v-model:checked="nestify" />
      </n-form-item>
    </n-space>

    <c-select v-model:value="selectedLocale" label="Locale:" label-position="left" :options="allLocales" searchable mb-1 placeholder="Search locale version" />

    <NFormItem label="Select output format:" label-placement="left" mb-1>
      <NSelect v-model:value="selectedFormat" :options="formats" placeholder="Select format" />
    </NFormItem>

    <c-input-text v-if="selectedFormat === 'sql'" v-model:value="tableName" label="Table Name:" label-placement="left" mb-1 />

    <NButton mb-2 mt-2 @click="handleGenerate">
      Generate Fake Data
    </NButton>

    <c-alert v-if="error">
      {{ error }}
    </c-alert>

    <c-card v-if="generatedData" title="Generated data">
      <textarea-copyable :value="generatedData" :language="selectedFormat" :download-file-name="`data.${selectedFormat}`" />
    </c-card>
  </NCard>
</template>
