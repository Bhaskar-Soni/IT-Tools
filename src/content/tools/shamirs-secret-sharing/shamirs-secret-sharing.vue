<script setup lang="ts">
import sss from 'shamirs-secret-sharing';

async function getBuffer() {
  if (typeof window !== 'undefined') {
    // use the browser-friendly `buffer` polyfill package when available
    try {
      const mod = await import('buffer');
      return mod.Buffer;
    }
    catch (_) {
      // fallback to a minimal Buffer-like shim
      return undefined;
    }
  }
  else {
    const mod = await import('node:buffer');
    return mod.Buffer;
  }
}

const secret = ref('');
const secretMode = ref<'hex' | 'utf8' | 'base64'>('utf8');
const shares = ref<string[]>([]);
const sharesError = ref('');
const threshold = ref(2);
const shareCount = ref(3);
const recombineInput = ref<string>('');
const recombinedSecret = ref('');
const recombineError = ref('');

const secretModes = [
  { value: 'utf8', label: "Text" },
  { value: 'hex', label: "Hexadecimal" },
  { value: 'base64', label: "Base64" },
];

async function splitSecret() {
  if (!secret.value) {
    shares.value = [];
    return;
  }

  sharesError.value = '';
  try {
    const Buf = await getBuffer();
    let secretBuffer: any;
    if (Buf) {
      secretBuffer = Buf.from(secret.value, secretMode.value as any);
    }
    else {
      // minimal Uint8Array fallback
      if (secretMode.value === 'hex') {
        const bytes = secret.value.match(/.{1,2}/g)?.map(b => parseInt(b, 16)) || [];
        secretBuffer = new Uint8Array(bytes);
      }
      else if (secretMode.value === 'base64') {
        const bin = atob(secret.value);
        const arr = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
        secretBuffer = arr;
      }
      else {
        const enc = new TextEncoder().encode(secret.value);
        secretBuffer = enc;
      }
    }
    if ((secretBuffer as any).length === 0) {
      throw new Error(`Cannot convert "${secret.value}" to ${secretMode.value}`);
    }
    const parts = sss.split(secretBuffer, { shares: shareCount.value, threshold: threshold.value });
    shares.value = parts.map((p: any) => {
      // parts may be Buffer or Uint8Array — convert to hex
      if (p.toString) return p.toString('hex');
      return Array.from(p).map((b: number) => b.toString(16).padStart(2, '0')).join('');
    });
  }
  catch (err: any) {
    sharesError.value = err.toString();
  }
}

async function recombineSecret() {
  recombineError.value = '';
  try {
    const Buf = await getBuffer();
    const buffers = recombineInput.value.split('\n').map((hex) => {
      if (Buf) {
        const buf = Buf.from(hex, 'hex');
        if ((buf as any).length === 0) throw new Error(`Cannot convert "${hex}" to hex`);
        return buf;
      }
      const arr = new Uint8Array(hex.match(/.{1,2}/g)?.map(b => parseInt(b, 16)) || []);
      if (arr.length === 0) throw new Error(`Cannot convert "${hex}" to hex`);
      return arr;
    });
    const result = sss.combine(buffers as any);
    // result may be Buffer or Uint8Array
    if ((result as any).toString) recombinedSecret.value = (result as any).toString(secretMode.value as any);
    else if (secretMode.value === 'hex') recombinedSecret.value = Array.from(result).map((b: number) => b.toString(16).padStart(2, '0')).join('');
    else if (secretMode.value === 'base64') {
      let s = '';
      for (let i = 0; i < result.length; i++) s += String.fromCharCode(result[i]);
      recombinedSecret.value = btoa(s);
    }
    else recombinedSecret.value = new TextDecoder().decode(result);
  }
  catch (err: any) {
    recombineError.value = err.toString();
  }
}
</script>

<template>
  <div>
    <c-select
      v-model:value="secretMode"
      label="Secret Mode:"
      label-position="left"
      :options="secretModes"
      mb-2
    />
    <c-card title="Share a secret (split)">
      <NForm label-placement="left">
        <NFormItem label="Secret:">
          <NInput v-model:value="secret" placeholder="Enter secret text" />
        </NFormItem>

        <n-space justify="center">
          <NFormItem label="Threshold (minimum shares to recover):">
            <NInputNumber v-model:value="threshold" :min="2" />
          </NFormItem>

          <NFormItem label="Number of shares:">
            <NInputNumber v-model:value="shareCount" :min="2" />
          </NFormItem>
        </n-space>

        <n-space justify="center">
          <NButton type="primary" @click="splitSecret">
            Split Secret
          </NButton>
        </n-space>
      </NForm>

      <c-alert v-if="sharesError">
        {{ sharesError }}
      </c-alert>
      <c-card v-if="!sharesError && shares.length" title="Generated Shares">
        <template v-for="(share, idx) in shares" :key="idx">
          <input-copyable v-model:value="shares[idx]" readonly mb-1 />
        </template>
      </c-card>
    </c-card>

    <c-card title="Recombine a secret">
      <c-input-text
        v-model:value="recombineInput"
        label="Your shares:"
        placeholder="Paste your shares here..."
        rows="5"
        multiline
        mb-2
      />
      <n-space justify="center">
        <NButton type="success" @click="recombineSecret">
          Recombine
        </NButton>
      </n-space>
      <c-card v-if="!recombineError" title="Recombined secret">
        <input-copyable :value="recombinedSecret" readonly />
      </c-card>
      <c-alert v-else>
        {{ recombineError }}
      </c-alert>
    </c-card>
  </div>
</template>
