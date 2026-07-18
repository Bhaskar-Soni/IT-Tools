<script setup lang="ts">

import { ref } from 'vue';
import { NCard, NForm, NFormItem, NInput } from 'naive-ui';

const bimiData = ref({
  domain: '',
  logoUrl: '',
  vmcUrl: '',
});

const bimiRecord = computed(() => {
  if (!bimiData.value.domain || !bimiData.value.logoUrl) {
    return '';
  }

  let record = `default._bimi.${bimiData.value.domain} IN TXT "v=BIMI1; l=${bimiData.value.logoUrl}`;

  if (bimiData.value.vmcUrl) {
    record += `; a=${bimiData.value.vmcUrl}`;
  }

  record += '"';

  return record;
});
</script>

<template>
  <NCard title="BIMI DNS Record Generator">
    <NForm :model="bimiData" label-placement="left" label-width="150px">
      <NFormItem label="Domain:">
        <NInput v-model:value="bimiData.domain" placeholder="example.com" />
      </NFormItem>
      <NFormItem label="Logo URL:">
        <NInput v-model:value="bimiData.logoUrl" placeholder="https://example.com/logo.svg" />
      </NFormItem>
      <NFormItem label="VMC Certificate URL:">
        <NInput v-model:value="bimiData.vmcUrl" placeholder="https://example.com/vmc.pem" />
      </NFormItem>
    </NForm>

    <c-card title="Generated BIMI record">
      <textarea-copyable :value="bimiRecord" />
    </c-card>
  </NCard>
</template>
