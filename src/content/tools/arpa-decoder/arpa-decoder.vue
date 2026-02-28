<script setup lang="ts">

import { fromARPA } from '@/utils/ip';

const arpaInput = ref('');

const decodedIP = computed(() => {
  try {
    return fromARPA(arpaInput.value.trim());
  }
  catch (e: any) {
    return `# ${e.toString()}`;
  }
});
</script>

<template>
  <div>
    <NFormItem label="ARPA Address:" label-placement="left" mb-2>
      <NInput v-model:value="arpaInput" placeholder="e.g. 10.1.168.192.in-addr.arpa. or xxxx.ip6.arpa." />
    </NFormItem>

    <c-card v-if="decodedIP">
      <textarea-copyable :value="decodedIP" />
    </c-card>
  </div>
</template>
