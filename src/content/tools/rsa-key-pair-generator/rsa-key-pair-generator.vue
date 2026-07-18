<script setup lang="ts">

import { watch, computed } from 'vue';
import { pki } from 'node-forge';
import type sshpk from 'sshpk';
import { generateKeyPair } from './rsa-key-pair-generator.service';
import TextareaCopyable from '@/components/TextareaCopyable.vue';
import { withDefaultOnErrorAsync } from '@/utils/defaults';
import { useValidation } from '@/composable/validation';
import { computedRefreshableAsync } from '@/composable/computedRefreshable';
import { useITStorage } from '@/composable/queryParams';

const bits = ref(2048);
const comment = ref('');
const password = ref('');
const debouncedComment = useDebounce(comment, 250);
const debouncedPassword = useDebounce(password, 250);
const emptyCerts = { publicKey: '', privateKey: '' };

const format = useITStorage('rsa-key-pair-generator:format', 'ssh');
const formatOptions = [
  { value: 'pem', label: "PEM" },
  { value: 'pkcs1', label: "PKCS#1" },
  { value: 'pkcs8', label: "PKCS#8" },
  { value: 'ssh', label: "OpenSSH Standard" },
  { value: 'openssh', label: "OpenSSH New" },
  { value: 'putty', label: "PuTTY" },
];

const supportsPassphrase = computed(() => format.value === 'pem' || format.value === 'ssh');

const runningInBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';

const { attrs: bitsValidationAttrs } = useValidation({
  source: bits,
  rules: [
    {
      message: 'Bits should be 256 <= bits <= 16384 and be a multiple of 8',
      validator: value => value >= 256 && value <= 16384 && value % 8 === 0,
    },
  ],
});

const [certs, refreshCerts] = computedRefreshableAsync(
  () => withDefaultOnErrorAsync(() => generateKeyPair({
    bits: bits.value,
    password: debouncedPassword.value,
    format: format.value as any,
    comment: debouncedComment.value,
  }), emptyCerts),
  emptyCerts,
);

// refresh when user changes format so the displayed keys match selection
watch(format, () => refreshCerts());

const sshPublic = computed(() => {
  const val = certs.publicKey || '';
  if (!val) return '';
  if (val.startsWith('ssh-rsa')) return val;
  if (val.indexOf('-----BEGIN') === 0) {
    try {
      const pub = pki.publicKeyFromPem(val) as any;
      function hexToUint8Array(hex: string) {
        if (hex.length % 2) hex = '0' + hex;
        const out = new Uint8Array(hex.length / 2);
        for (let i = 0; i < out.length; i++) out[i] = parseInt(hex.substr(i * 2, 2), 16);
        return out;
      }
      function writeUint32BE(arr: number[], v: number) {
        arr.push((v >>> 24) & 0xff, (v >>> 16) & 0xff, (v >>> 8) & 0xff, v & 0xff);
      }
      function uint8ArrayToBase64(u8: Uint8Array) {
        let s = '';
        const chunk = 0x8000;
        for (let i = 0; i < u8.length; i += chunk) {
          s += String.fromCharCode.apply(null, Array.from(u8.subarray(i, i + chunk)));
        }
        return btoa(s);
      }

      const parts: number[] = [];
      const alg = 'ssh-rsa';
      const algBytes = new TextEncoder().encode(alg);
      writeUint32BE(parts, algBytes.length);
      parts.push(...Array.from(algBytes));

      const eHex = pub.e.toString(16);
      let eBytes = hexToUint8Array(eHex);
      if (eBytes[0] & 0x80) {
        const tmp = new Uint8Array(eBytes.length + 1);
        tmp[0] = 0;
        tmp.set(eBytes, 1);
        eBytes = tmp;
      }
      writeUint32BE(parts, eBytes.length);
      parts.push(...Array.from(eBytes));

      const nHex = pub.n.toString(16);
      let nBytes = hexToUint8Array(nHex);
      if (nBytes[0] & 0x80) {
        const tmp = new Uint8Array(nBytes.length + 1);
        tmp[0] = 0;
        tmp.set(nBytes, 1);
        nBytes = tmp;
      }
      writeUint32BE(parts, nBytes.length);
      parts.push(...Array.from(nBytes));

      const blob = new Uint8Array(parts);
      const b64 = uint8ArrayToBase64(blob);
      return `ssh-rsa ${b64}`;
    }
    catch (e) {
      return val;
    }
  }
  return val;
});
</script>

<template>
  <div class="tool-container">
    <div class="top-row">
      <div class="format-select">
        <c-select
          v-model:value="format"
          label-position="left"
          label="Format:"
          :options="formatOptions"
          placeholder="Select a key format"
        />
      </div>
      <div class="bits-input">
        <n-form-item label="Bits :" v-bind="bitsValidationAttrs as any" label-placement="left">
          <NInputNumber v-model:value="bits" min="256" max="16384" step="8" />
        </n-form-item>
      </div>
    </div>

    <div v-if="supportsPassphrase" class="full-row">
      <n-form-item label="Passphrase :" label-placement="left">
        <n-input
          v-model:value="password"
          type="password"
          show-password-on="mousedown"
          placeholder="Passphrase"
        />
      </n-form-item>
    </div>

    <c-alert v-if="runningInBrowser && (format === 'ssh' || format === 'openssh' || format === 'putty')" type="info" show-icon>
      Public key will be shown in OpenSSH `ssh-rsa` form in the browser; private key OpenSSH formatting may not be available and will be shown as PEM.
    </c-alert>

    <div class="full-row">
      <n-form-item label="Comment :" label-placement="left">
        <n-input
          v-model:value="comment"
          type="text"
          placeholder="Comment"
        />
      </n-form-item>
    </div>

    <div class="refresh-btn">
      <c-button @click="refreshCerts">Refresh key-pair</c-button>
    </div>

    <div class="key-section">
      <h3>Public key</h3>
      <TextareaCopyable :value="sshPublic || certs.publicKey" :word-wrap="true" />
    </div>

    <div class="key-section">
      <h3>Private key</h3>
      <TextareaCopyable :value="certs.privateKey" />
    </div>
  </div>
</template>

<style scoped>
.tool-container {
  max-width: 980px;
  margin: 0 auto;
  padding: 12px 20px;
}
.top-row {
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 12px;
}
.format-select {
  flex: 1 1 60%;
}
.bits-input {
  width: 160px;
}
.full-row {
  margin-bottom: 12px;
}
.refresh-btn {
  display:flex;
  justify-content:center;
  margin: 8px 0 16px 0;
}
.key-section {
  margin-bottom: 18px;
}
.tool-container textarea,
.tool-container input,
.tool-container .n-input {
  font-size: 14px;
}
.tool-container textarea {
  max-height: 360px;
  overflow: auto;
}
</style>
