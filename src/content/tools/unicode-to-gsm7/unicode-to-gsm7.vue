<script setup lang="ts">

import { convertUnicodeToGSM7 } from '@skeepit/unicode-to-gsm7';
import { SegmentedMessage } from 'sms-segments-calculator';

const smsInfo = ref<SegmentedMessage | null>(null);

function transformer(value: string) {
  smsInfo.value = null;
  if (value === '') {
    return '';
  }

  try {
    smsInfo.value = new SegmentedMessage(value);
    return convertUnicodeToGSM7(value);
  }
  catch (e: any) {
    return e.toString();
  }
}
</script>

<template>
  <format-transformer
    input-label="Your text to encode to GSM-7"
    input-placeholder="Put your text here..."
    output-label="GSM-7 encoded version:"
    :transformer="transformer"
  />

  <n-card v-if="smsInfo" title="SMS Info">
    <input-copyable label="Encoding:" label-position="left" :value="smsInfo.encodingName" mb-1 />
    <input-copyable label="Message size:" label-position="left" :value="smsInfo.messageSize" mb-1 />
    <input-copyable label="Total size:" label-position="left" :value="smsInfo.totalSize" mb-1 />
    <input-copyable label="Segments count:" label-position="left" :value="smsInfo.segmentsCount" mb-1 />
    <input-copyable label="Non GSM-7 characters:" label-position="left" :value="[...new Set(smsInfo.getNonGsmCharacters())].join(',')" />
  </n-card>
</template>
