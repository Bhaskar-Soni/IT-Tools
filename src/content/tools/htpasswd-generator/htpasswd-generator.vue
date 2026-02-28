<script setup lang="ts">

import { generateHtpasswd } from './htpasswd-generator.service';
import TextareaCopyable from '@/components/TextareaCopyable.vue';

const username = ref('');
const password = ref('');
const hashMethod = ref('bcrypt');
const saltCount = ref(10);

const algos = [
  { value: 'bcrypt', label: "Bcrypt" },
  { value: 'md5', label: "MD5" },
  { value: 'apr1', label: "Apache MD5 (apr1)" },
  { value: 'sha256', label: "SHA256" },
  { value: 'sha512', label: "SHA512" },
];

const htpasswd = ref('# username and password must not be empty');
let generationId = 0;

watchEffect(async () => {
  const currentId = ++generationId;
  if (username.value === '' || password.value === '') {
    htpasswd.value = '# username and password must not be empty';
    return;
  }

  htpasswd.value = '# generating...';
  try {
    const result = await generateHtpasswd({
      username: username.value,
      password: password.value,
      saltRounds: saltCount.value,
      algorithm: hashMethod.value as never,
    });
    if (currentId === generationId) {
      htpasswd.value = result;
    }
  }
  catch (error: any) {
    if (currentId === generationId) {
      htpasswd.value = `# ${error?.message ?? 'Failed to generate htpasswd'}`;
    }
  }
});
</script>

<template>
  <div>
    <c-input-text
      v-model:value="username"
      label="Username"
      placeholder="Your username..."
      clearable raw-text mb-5
    />
    <c-input-text
      v-model:value="password"
      label="Password"
      placeholder="Your password..."
      clearable
      raw-text
      mb-2
      type="password"
    />

    <c-select
      v-model:value="hashMethod"
      label="Hash method:"
      :options="algos"
      mb-2
    />

    <n-form-item v-if="hashMethod === 'bcrypt'" label="Salt rounds: " label-placement="left" label-width="120">
      <NInputNumber v-model:value="saltCount" placeholder="Salt rounds..." :max="100" :min="0" w-full />
    </n-form-item>

    <n-divider />

    <n-form-item label="htpasswd content:">
      <TextareaCopyable :value="htpasswd" />
    </n-form-item>
  </div>
</template>
