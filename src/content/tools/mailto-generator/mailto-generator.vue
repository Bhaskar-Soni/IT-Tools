<script setup lang="ts">

import { computed, ref } from 'vue';
import { NButton, NCard, NForm, NFormItem, NInput } from 'naive-ui';

const form = ref({
  to: '',
  cc: '',
  bcc: '',
  subject: '',
  body: '',
});

const mailtoLink = computed(() => {
  const to = form.value.to;
  if (!to) {
    return '';
  }
  const params = new URLSearchParams();
  if (form.value.subject) {
    params.append('subject', form.value.subject);
  }
  if (form.value.body) {
    params.append('body', form.value.body);
  }
  if (form.value.cc) {
    params.append('cc', form.value.cc);
  }
  if (form.value.bcc) {
    params.append('bcc', form.value.bcc);
  }

  return `mailto:${to}?${params.toString()}`;
});

function openMailto() {
  window.location.href = mailtoLink.value;
}
</script>

<template>
  <NCard title="Mailto Link Generator">
    <NForm :model="form" label-placement="left">
      <NFormItem label="To:">
        <NInput v-model:value="form.to" placeholder="recipient{'@'}example.com" />
      </NFormItem>
      <NFormItem label="CC:">
        <NInput v-model:value="form.cc" placeholder="cc{'@'}example.com" />
      </NFormItem>
      <NFormItem label="BCC:">
        <NInput v-model:value="form.bcc" placeholder="bcc{'@'}example.com" />
      </NFormItem>
      <NFormItem label="Subject:">
        <NInput v-model:value="form.subject" placeholder="Email subject" />
      </NFormItem>
      <NFormItem label="Body:" label-placement="top">
        <NInput
          v-model:value="form.body"
          type="textarea"
          placeholder="Email body"
          :autosize="{ minRows: 3, maxRows: 6 }"
        />
      </NFormItem>
      <c-card v-if="mailtoLink" title="Generated Link">
        <textarea-copyable :value="mailtoLink" />
        <n-space justify="center">
          <NButton type="primary" @click="openMailto">
            Open Mail Client
          </NButton>
        </n-space>
      </c-card>
    </NForm>
  </NCard>
</template>
