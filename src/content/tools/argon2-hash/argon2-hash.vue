<script setup lang="ts">

import { argon2d, argon2i, argon2id } from 'hash-wasm';
import { useQueryParamOrStorage } from '@/composable/queryParams';

// Inputs
const password = ref('');
const algorithm = useQueryParamOrStorage<'argon2id' | 'argon2i' | 'argon2d'>({ name: 'algo', storageName: 'argon2:a', defaultValue: 'argon2id' });

// Parameters
const salt = useQueryParamOrStorage({ name: 'salt', storageName: 'argon2:s', defaultValue: '' });
const iterations = useQueryParamOrStorage({ name: 'iter', storageName: 'argon2:i', defaultValue: 3 });
const memorySizeKB = useQueryParamOrStorage({ name: 'memory', storageName: 'argon2:m', defaultValue: 512 });
const parallelism = useQueryParamOrStorage({ name: 'paral', storageName: 'argon2:p', defaultValue: 1 });
const hashLength = useQueryParamOrStorage({ name: 'len', storageName: 'argon2:l', defaultValue: 32 });
const outputType = useQueryParamOrStorage<'hex' | 'encoded' | 'binary'>({ name: 'output', storageName: 'argon2:o', defaultValue: 'encoded' });

// Result
const result = ref('');
const error = ref('');

// Helpers
function hexToBytes(hex: string): Uint8Array {
  const clean = hex.trim().replace(/^0x/, '');
  const bytes = new Uint8Array(clean.length / 2);
  for (let i = 0; i < clean.length; i += 2) {
    bytes[i / 2] = Number.parseInt(clean.slice(i, i + 2), 16);
  }
  return bytes;
}

async function generateHash() {
  error.value = '';
  try {
    const saltBytes = salt.value ? hexToBytes(salt.value) : crypto?.getRandomValues(new Uint8Array(16));
    const options = {
      password: password.value,
      salt: saltBytes,
      iterations: iterations.value,
      memorySize: memorySizeKB.value,
      parallelism: parallelism.value,
      hashLength: hashLength.value,
      outputType: outputType.value,
    } as const;

    const fn
      = algorithm.value === 'argon2id'
        ? argon2id
        : algorithm.value === 'argon2i'
          ? argon2i
          : argon2d;

    result.value = await fn(options);
  }
  catch (err: any) {
    error.value = err.toString();
  }
}
</script>

<template>
  <div>
    <NForm label-width="120" label-placement="left">
      <NFormItem label="Algorithm:">
        <NSelect
          v-model:value="algorithm" :options="[[
            { label: 'Argon2id', value: 'argon2id' },
            { label: 'Argon2i', value: 'argon2i' },
            { label: 'Argon2d', value: 'argon2d' },
          ]]"
        />
      </NFormItem>

      <NFormItem label="Password:">
        <NInput v-model:value="password" placeholder="Enter password" />
      </NFormItem>

      <NFormItem label="Salt (hex):">
        <NInput v-model:value="salt" placeholder="Optional hex salt" />
      </NFormItem>

      <n-space justify="space-evenly">
        <NFormItem label="Iterations:">
          <NInputNumber v-model:value="iterations" :min="1" style="width: 100px" />
        </NFormItem>

        <NFormItem label="Memory (KiB):">
          <NInputNumber v-model:value="memorySizeKB" :min="1" style="width: 100px" />
        </NFormItem>

        <NFormItem label="Parallelism:">
          <NInputNumber v-model:value="parallelism" :min="1" style="width: 100px" />
        </NFormItem>

        <NFormItem label="Hash length:">
          <NInputNumber v-model:value="hashLength" :min="16" style="width: 100px" />
        </NFormItem>
      </n-space>

      <NFormItem label="Output type:">
        <NSelect
          v-model:value="outputType" :options="[[
            { label: 'Hex', value: 'hex' },
            { label: 'Encoded', value: 'encoded' },
            { label: 'Binary', value: 'binary' },
          ]]"
        />
      </NFormItem>

      <n-space justify="center">
        <NButton type="primary" @click="generateHash">
          Generate
        </NButton>
      </n-space>
    </NForm>

    <c-alert v-if="error" mt-2>
      {{ error }}
    </c-alert>
    <c-card v-if="result" title="Argon2 Hash" mt-2>
      <textarea-copyable :value="result" />
    </c-card>
  </div>
</template>
