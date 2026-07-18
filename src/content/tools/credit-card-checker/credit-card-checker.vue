<script setup lang="ts">

import { parse } from 'creditcard';
import { useQueryParam } from '@/composable/queryParams';

const cardNumber = useQueryParam({ tool: 'credit-card-validator', name: 'number', defaultValue: '' });
const parsed = computed(() => {
  if (!cardNumber.value) {
    return null;
  }
  return parse(cardNumber.value);
});
</script>

<template>
  <div style="max-width: 600px;">
    <c-input-text
      v-model:value="cardNumber"
      label="Credit Card Number:"
      label-position="left"
      placeholder="e.g. 4111 1111 1111 1111"
      mb-2
    />

    <n-alert v-if="parsed && !parsed.validates" type="error">
      Invlid Credit Card Number
    </n-alert>
    <n-card v-if="parsed && parsed.validates" title="Credit Card Number Info">
      <input-copyable label="Formatted:" label-position="left" label-width="150px" mb-1 :value="parsed.formatted" />
      <input-copyable label="PAN Truncated:" label-position="left" label-width="150px" mb-1 :value="parsed.truncate" />
      <input-copyable label="Scheme:" label-position="left" label-width="150px" mb-1 :value="parsed.scheme || 'Unknown'" />
      <input-copyable label="Major Industry Identifier:" mb-1 :value="parsed.mii" />
      <input-copyable label="Issuer Identifier Number:" mb-1 :value="parsed.iin" />
      <input-copyable label="CVV Length:" label-position="left" label-width="150px" mb-1 :value="parsed.cvv" />
    </n-card>
  </div>
</template>
