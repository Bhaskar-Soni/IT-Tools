<script setup lang="ts">

import { dbmToMw, mwToDbm } from './dbm-mw-converter.service'; // Adjust path as needed

const dbmInput = ref(1);
const mwOutput = computed(() => dbmToMw(dbmInput.value).toFixed(3));

const mwInput = ref(1);
const dbmOutput = computed(() => mwToDbm(mwInput.value).toFixed(3));
</script>

<template>
  <c-card title="dBm to mW">
    <n-form-item label="dBm value:" label-placement="left">
      <NInputNumber v-model:value="dbmInput" />
    </n-form-item>

    <input-copyable label="Corresponding mW value:" label-position="left" :value="mwOutput" />
  </c-card>

  <c-card title="mW to dBm">
    <n-form-item label="mW value:" label-placement="left">
      <NInputNumber v-model:value="mwInput" :min="0" />
    </n-form-item>

    <input-copyable label="Corresponding dBm value:" label-position="left" :value="dbmOutput" />
  </c-card>
</template>
