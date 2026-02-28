<script setup lang="ts">
import { getAuthHeaderCheckResult } from './sip-auth.service';

const password = ref('');

function transformer(value: string) {
  if (value !== '' && password.value !== '') {
    const Result = getAuthHeaderCheckResult({ message: value, password: password.value });
    if (Result) {
      return "Success";
    }
    else {
      return "Failure";
      // return `11 calculatedHash: ${calculatedHash}, response: ${response}`;
    }
  }
}
</script>

<template>
  <div flex flex-col gap-4>
    <c-input-text
      v-model:value="password"
      type="password"
      placeholder="Enter a password..."
      autofocus
      raw-text
      label="SIP password"
    />
    <format-transformer
      input-label="SIP message"
      input-placeholder="Paste your SIP message here..."
      output-label="Result"
      :transformer="transformer"
      input-autosize
    />
  </div>
</template>
