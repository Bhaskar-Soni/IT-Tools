<script setup lang="ts">
import { Buffer } from 'buffer';

import { getKeysOrCertificatesInfosAsync } from './certificate-key-parser.service';
import { type LabelValue } from './certificate-key-parser.infos';
import { useDownloadFileFromBase64 } from '@/composable/downloadBase64';

const inputKeyOrCertificate = ref('');
const passphrase = ref('');
const fileInput = ref<Buffer | null>(null);
const inputType = ref<'file' | 'content'>('file');

async function onUpload(file: File) {
  if (file) {
    fileInput.value = Buffer.from(await file.arrayBuffer());
    inputKeyOrCertificate.value = '';
  }
}

const certificateX509DER = ref('');
const { download: downloadX509DER } = useDownloadFileFromBase64({
  source: certificateX509DER,
  extension: 'der',
});

function downloadX509DERFile() {
  if (!certificateX509DER.value) return;
  downloadX509DER();
}

const parsedSections = computedAsync<LabelValue[][]>(async () => {
  let value: string | Buffer = '';

  if (inputType.value === 'file' && fileInput.value) {
    value = fileInput.value;
  } else if (inputType.value === 'content') {
    value = inputKeyOrCertificate.value;
  }

  try {
    const parsed = await getKeysOrCertificatesInfosAsync(value, passphrase.value);

    if (parsed.length === 1) {
      const { values, certificateX509DER: der } = parsed[0];
      certificateX509DER.value = der || '';
      return [values];
    }

    return parsed.map(p => p.values);
  } catch (e: any) {
    return [[{ label: 'Parsing Error', value: e.toString() }]];
  }
});
</script>

<template>
  <div>
    <c-card>
      <n-radio-group v-model:value="inputType" flex justify-center>
        <n-space>
          <n-radio value="file" label="File" />
          <n-radio value="content" label="Content" />
        </n-space>
      </n-radio-group>

      <c-file-upload v-if="inputType === 'file'" @file-upload="onUpload" />

      <c-input-text
        v-if="inputType === 'content'"
        v-model:value="inputKeyOrCertificate"
        multiline
        rows="8"
      />
    </c-card>

    <c-input-text
      v-model:value="passphrase"
      label="Passphrase"
      type="password"
    />

    <n-divider />

    <c-card v-for="(part, i) in parsedSections" :key="i">
      <input-copyable
        v-for="{ label, value, multiline } in part"
        :key="label"
        :label="label"
        :value="value"
        :multiline="multiline"
      />
    </c-card>

    <div v-if="certificateX509DER" flex justify-center>
      <c-button @click="downloadX509DERFile">
        Download X509 DER certificate
      </c-button>
    </div>
  </div>
</template>

