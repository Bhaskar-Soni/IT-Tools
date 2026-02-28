<script setup lang="ts">

import { ref } from 'vue';

const domain = ref('');
const policy = ref('none');
const subPolicy = ref('none');
const percentage = ref(100);
const rua = ref('');
const ruf = ref('');
const aspf = ref('r');
const adkim = ref('r');
const ri = ref(86400);
const dmarcRecord = computed(() => {
  const recordParts = ['v=DMARC1', `p=${policy.value}`, `sp=${subPolicy.value}`];

  if (percentage.value !== 100) {
    recordParts.push(`pct=${percentage.value}`);
  }
  if (rua.value) {
    recordParts.push(`rua=mailto:${rua.value}`);
  }
  if (ruf.value) {
    recordParts.push(`ruf=mailto:${ruf.value}`);
  }
  if (aspf.value) {
    recordParts.push(`aspf=${aspf.value}`);
  }
  if (adkim.value) {
    recordParts.push(`adkim=${adkim.value}`);
  }
  if (ri.value) {
    recordParts.push(`ri=${ri.value}`);
  }

  return recordParts.join('; ');
});

const policies = [
  { label: "None", value: 'none' },
  { label: "Quarantine", value: 'quarantine' },
  { label: "Reject", value: 'reject' },
];

const alignments = [
  { label: "Relaxed (r)", value: 'r' },
  { label: "Strict (s)", value: 's' },
];
</script>

<template>
  <n-card title="DMARC Record Generator" max-w-600px>
    <n-form-item label="Domain:" label-placement="left">
      <n-input v-model:value="domain" placeholder="example.com" />
    </n-form-item>

    <n-form-item label="Policy:" label-placement="left">
      <n-select v-model:value="policy" :options="policies" placeholder="Select policy" />
    </n-form-item>

    <n-form-item label="Subdomain Policy:" label-placement="left">
      <n-select v-model:value="subPolicy" :options="policies" placeholder="Select policy" />
    </n-form-item>

    <n-form-item label="Percentage (of emails subject to DMARC policy enforcement (0-100%)):" label-placement="top">
      <NInputNumber v-model:value="percentage" :min="0" :max="100" placeholder="Enter percentage" />
    </n-form-item>

    <n-form-item label="Aggregate Email (where aggregate DMARC reports should be sent):" label-placement="top">
      <n-input v-model:value="rua" placeholder="admin{'@'}example.com" />
    </n-form-item>

    <n-form-item label="Forensic Email (where forensic DMARC failure reports should be sent):" label-placement="top">
      <n-input v-model:value="ruf" placeholder="admin{'@'}example.com" />
    </n-form-item>

    <n-form-item label="Alignment (SPF):" label-placement="left">
      <n-select v-model:value="aspf" :options="alignments" placeholder="Select alignment" />
    </n-form-item>

    <n-form-item label="Alignment (DKIM):" label-placement="left">
      <n-select v-model:value="adkim" :options="alignments" placeholder="Select alignment" />
    </n-form-item>

    <n-form-item label="Reporting Interval (for sending DMARC aggregate reports):" label-placement="top">
      <NInputNumber v-model:value="ri" :min="3600" placeholder="Enter interval">
        <template #suffix>
          seconds
        </template>
      </NInputNumber>
    </n-form-item>

    <n-card v-if="dmarcRecord" title="Generated DMARC Record">
      <textarea-copyable :value="dmarcRecord" />
    </n-card>
  </n-card>
</template>

