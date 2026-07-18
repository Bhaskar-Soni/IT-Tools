<script setup lang="ts">

import type sshpk from 'sshpk';
import { onMounted } from 'vue';
import { generateKeyPair } from './ed25519-key-pair-generator.service';
import TextareaCopyable from '@/components/TextareaCopyable.vue';
import { withDefaultOnErrorAsync } from '@/utils/defaults';
import { computedRefreshableAsync } from '@/composable/computedRefreshable';
import { useITStorage } from '@/composable/queryParams';

const password = ref('');
const comment = ref('');
const debouncedComment = useDebounce(comment, 250);
const debouncedPassword = useDebounce(password, 250);
const emptyCerts = { publicKey: '', privateKey: '' };

const format = useITStorage('ed25519-key-pair-generator:format', 'ssh');
const formatOptions = [
  { value: 'pem', label: "PEM" },
  { value: 'pkcs8', label: "PKCS#8" },
  { value: 'ssh', label: "OpenSSH Standard" },
  { value: 'openssh', label: "OpenSSH New" },
  { value: 'putty', label: "PuTTY" },
];

const supportsPassphrase = computed(() => format.value === 'ssh');

const [certs, refreshCerts] = computedRefreshableAsync(
  () => withDefaultOnErrorAsync(() => generateKeyPair(
    {
      password: debouncedPassword.value,
      format: format.value as sshpk.PrivateKeyFormatType,
      comment: debouncedComment.value,
    },
  ), emptyCerts),
  emptyCerts,
);

onMounted(() => {
  try { refreshCerts(); } catch (_) {}
});
</script>

<template>
  <div>
    <n-space mb-2>
      <c-select
        v-model:value="format"
        label-position="left"
        label="Format:"
        :options="formatOptions"
        placeholder="Select a key format"
      />

      <n-form-item v-if="supportsPassphrase" label="Passphrase :" label-placement="left">
        <n-input
          v-model:value="password"
          type="password"
          show-password-on="mousedown"
          placeholder="Passphrase"
        />
      </n-form-item>
    </n-space>

    <n-space mb-2>
      <n-form-item label="Comment :" label-placement="left">
        <n-input
          v-model:value="comment"
          type="text"
          placeholder="Comment"
        />
      </n-form-item>

      <c-button @click="refreshCerts">
        Refresh key-pair
      </c-button>
    </n-space>

    <div>
      <h3>Public key</h3>
      <TextareaCopyable :value="certs.publicKey" :word-wrap="true" />
    </div>

    <div>
      <h3>Private key</h3>
      <TextareaCopyable :value="certs.privateKey" />
    </div>
  </div>
</template>
