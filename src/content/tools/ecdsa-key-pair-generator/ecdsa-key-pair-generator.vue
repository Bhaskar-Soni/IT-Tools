<script setup lang="ts">

import type sshpk from 'sshpk';
import { onMounted } from 'vue';
import { generateKeyPair } from './ecdsa-key-pair-generator.service';
import TextareaCopyable from '@/components/TextareaCopyable.vue';
import { withDefaultOnErrorAsync } from '@/utils/defaults';
import { computedRefreshableAsync } from '@/composable/computedRefreshable';
import { useITStorage } from '@/composable/queryParams';

const password = ref('');
const comment = ref('');
const debouncedComment = useDebounce(comment, 250);
const debouncedPassword = useDebounce(password, 250);
const emptyCerts = { publicKey: '', privateKey: '' };
const curve = useITStorage('ecdsa-key-pair-generator:curve', 'nistp256');
const curveOptions = [
  { value: 'nistp256', label: "nistp256" },
  { value: 'nistp384', label: "nistp384" },
  { value: 'nistp521', label: "nistp521" },
];

const format = useITStorage('ecdsa-key-pair-generator:format', 'ssh');
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
      curve: curve.value as sshpk.CurveType,
      comment: debouncedComment.value,
    },
  ), emptyCerts),
  emptyCerts,
);

onMounted(() => {
  // force initial generation so UI shows values immediately
  try {
    refreshCerts();
  } catch (_) {
    // ignore - computedRefreshableAsync handles errors and returns defaults
  }
});
</script>

<template>
  <div>
    <n-space mb-1>
      <c-select
        v-model:value="format"
        label-position="left"
        label="Format:"
        :options="formatOptions"
        placeholder="Select a key format"
      />

      <c-select
        v-model:value="curve"
        label-position="left"
        label="Curve:"
        :options="curveOptions"
        placeholder="Select a curve type"
      />
    </n-space>

    <div v-if="supportsPassphrase" mb-1 mt-3>
      <n-form-item label="Passphrase :" label-placement="left">
        <n-input
          v-model:value="password"
          type="password"
          show-password-on="mousedown"
          placeholder="Passphrase"
        />
      </n-form-item>
    </div>

    <div mb-2>
      <n-form-item label="Comment :" label-placement="left">
        <n-input
          v-model:value="comment"
          type="text"
          placeholder="Comment"
        />
      </n-form-item>
    </div>

    <n-space justify="center" mb-1>
      <c-button @click="refreshCerts">
        Refresh key-pair
      </c-button>
    </n-space>

    <n-divider />

    <div>
      <h3>Public key</h3>
      <TextareaCopyable :value="certs.publicKey" :word-wrap="true" :max-length="140" />
    </div>

    <div>
      <h3>Private key</h3>
      <TextareaCopyable :value="certs.privateKey" :word-wrap="true" :max-length="800" />
    </div>
  </div>
</template>
