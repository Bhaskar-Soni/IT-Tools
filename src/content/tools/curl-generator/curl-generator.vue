<script setup lang="ts">

import JSON5 from 'json5';
import { useValidation } from '@/composable/validation';

const url = ref('');
const method = ref('POST'); // Default method set to POST for body support
const bodyType = ref('json'); // Default body type
const jsonData = ref('');

const headers = ref([{ key: '', value: '' }]);
const formData = ref([{ key: '', value: '' }]);

const methods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'];

const optionsList = [
  { key: 'compressed', description: 'Request compressed response' },
  { key: 'compressed-ssh', description: 'Enable SSH compression' },
  { key: 'fail', description: 'Fail silently on HTTP errors' },
  { key: 'fail-early', description: 'Fail on first transfer error, do not continue' },
  { key: 'head', description: 'Show document info only' },
  { key: 'include', description: 'Include protocol response headers in output' },
  { key: 'insecure', description: 'Allow insecure server connections when using SSL' },
  { key: 'ipv4', description: 'Resolve names to IPv4 addresses' },
  { key: 'ipv6', description: 'Resolve names to IPv6 addresses' },
  { key: 'list-only', description: 'List only mode' },
  { key: 'location', description: 'Follow redirects' },
  { key: 'location-trusted', description: 'Follow redirects and send auth to other hosts' },
  { key: 'no-keepalive', description: 'Disable TCP keepalive on connection' },
  { key: 'show-error', description: 'Show error even when silent mode is used' },
  { key: 'silent', description: 'Suppress output' },
  { key: 'ssl', description: 'Try SSL/TLS connection' },
  { key: 'sslv2', description: 'Use SSLv2' },
  { key: 'sslv3', description: 'Use SSLv3' },
  { key: 'verbose', description: 'Increase output verbosity' },
];

const selectedOptions = ref<Record<string, boolean>>({});

const curlCommand = computed(() => {
  let command = `curl -X ${method.value} "${url.value}"`;

  headers.value.forEach(({ key, value }) => {
    if (key && value) {
      command += ` -H "${key}: ${value}"`;
    }
  });

  if (bodyType.value === 'json' && jsonData.value) {
    command += ` -H "Content-Type: application/json" --data '${JSON.stringify(JSON5.parse(jsonData.value))}'`;
  }
  else if (bodyType.value === 'form-data') {
    formData.value.forEach(({ key, value }) => {
      if (key && value) {
        command += ` -F "${key}=${value}"`;
      }
    });
  }

  optionsList.forEach(({ key }) => {
    if (selectedOptions.value[key]) {
      command += ` --${key}`;
    }
  });

  return command;
});

const jsonBodyValidation = useValidation({
  source: jsonData,
  rules: [
    {
      message: "Invalid JSON string",
      validator: value => !value || JSON5.parse(value),
    },
  ],
});
</script>

<template>
  <div>
    <NFormItem label="Url:" label-placement="left">
      <NInput v-model:value="url" placeholder="Enter URL" />
    </NFormItem>
    <NFormItem label="Method:" label-placement="left">
      <NSelect v-model:value="method" :options="methods.map(m => ({ label: m, value: m }))" />
    </NFormItem>

    <NRadioGroup v-model:value="bodyType" mb-2>
      <NRadio value="json">
        JSON Body
      </NRadio>
      <NRadio value="form-data">
        Multipart Form-Data
      </NRadio>
    </NRadioGroup>

    <c-card v-if="bodyType === 'json'" title="JSON Body:" mb-2>
      <c-input-text
        v-model:value="jsonData" multiline rows="6"
        placeholder="Enter JSON body" :validation="jsonBodyValidation"
      />
    </c-card>

    <c-card v-else title="Form entries:" mb-2>
      <NDynamicInput v-model:value="formData" preset="pair" key-placeholder="Key" value-placeholder="Value" />
    </c-card>

    <c-card title="HTTP Headers:" mb-2>
      <NDynamicInput v-model:value="headers" preset="pair" key-placeholder="Header" value-placeholder="Value" />
    </c-card>

    <c-card title="Options:" mb-2>
      <template v-for="option in optionsList" :key="option.key">
        <NCheckbox v-model:checked="selectedOptions[option.key]">
          {{ `--${option.key}` }} <em>({{ option.description }})</em>
        </NCheckbox>
      </template>
    </c-card>

    <c-card title="Generated curl command">
      <textarea-copyable :value="curlCommand" />
    </c-card>
  </div>
</template>
