<script setup lang="ts">

import { NForm, NFormItem, NInput, NSelect } from 'naive-ui';
import { generateKeyPair } from '../rsa-key-pair-generator/rsa-key-pair-generator.service';
import { withDefaultOnErrorAsync } from '@/utils/defaults';
import { computedRefreshableAsync } from '@/composable/computedRefreshable';

const domain = ref('');
const selector = ref('default');
const keySize = ref('2048');
const password = ref('');

const keySizes = [
  { label: "1024-bit (Less secure, but faster)", value: '1024' },
  { label: "2048-bit (Recommended for security)", value: '2048' },
  { label: "4096-bit (Stronger security, but slower)", value: '4096' },
];

const emptyCerts = { publicKey: '', privateKey: '' };
const [certs, refreshCerts] = computedRefreshableAsync(
  () => withDefaultOnErrorAsync(() => generateKeyPair({
    bits: Number(keySize.value),
    password: password.value,
    format: 'pem',
  }), emptyCerts),
  emptyCerts,
);

const dKIMRecord = computed(() => {
  if (!domain.value || !selector.value) {
    return '';
  }

  const pubKey = certs.value.publicKey.replace(/-----(BEGIN|END) PUBLIC KEY-----|\s/g, '');
  const parts = [
    'v=DKIM1',
    'k=rsa',
    `p=${pubKey}`,
  ];

  const record = parts.join('; ');
  return `${selector.value}._domainkey.${domain.value} IN TXT "${record}"`;
});
</script>

<template>
  <NForm label-placement="top">
    <NFormItem label="Domain Name:">
      <NInput v-model:value="domain" placeholder="Enter domain (e.g., example.com)" />
    </NFormItem>

    <NFormItem label=">-">
      <NInput v-model:value="selector" placeholder="Enter selector (e.g., default)" />
    </NFormItem>

    <NFormItem label="Key Size (of the RSA key used for signing emails):">
      <NSelect v-model:value="keySize" :options="keySizes" placeholder="Select key size" />
    </NFormItem>

    <NFormItem label="Passphrase (of private key):">
      <NInput
        v-model:value="password"
        type="password"
        show-password-on="mousedown"
        placeholder="Passphrase"
      />
    </NFormItem>

    <div mb-2 flex justify-center>
      <n-button @click="refreshCerts()">
        Refresh Certificate
      </n-button>
    </div>

    <c-card title="Generate DKIM Record" mb-1>
      <textarea-copyable :value="dKIMRecord" />
    </c-card>

    <c-card v-if="dKIMRecord" title="RSA Public Key" mb-1>
      <textarea-copyable :value="certs.publicKey" />
    </c-card>

    <c-card v-if="dKIMRecord" title="PEM RSA Private key">
      <textarea-copyable :value="certs.privateKey" />
    </c-card>
  </NForm>
</template>
