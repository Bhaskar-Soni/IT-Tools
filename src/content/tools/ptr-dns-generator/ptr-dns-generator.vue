<script setup lang="ts">

import { toARPA } from '@/utils/ip';

const ipInput = ref('');
const ptrRecord = computed(() => {
  try {
    return toARPA(ipInput.value.trim());
  }
  catch (e: any) {
    return `# ${e.toString()}`;
  }
});
</script>

<template>
  <div>
    <NFormItem label="IP Address (IPv4 or IPv6):" label-placement="left" mb-2>
      <NInput v-model:value="ipInput" placeholder="e.g. 192.168.1.10 or 2001:db8::1" />
    </NFormItem>

    <c-card v-if="ptrRecord">
      <textarea-copyable :value="ptrRecord" />
    </c-card>
  </div>
</template>
