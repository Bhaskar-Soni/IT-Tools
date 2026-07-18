<script setup lang="ts">
const pxRemRatio = 16;

const pxInput = ref(16);
const remOutput = computed(() => (pxInput.value / pxRemRatio).toFixed(3));

const remInput = ref(1);
const pxOutput = computed(() => (remInput.value * pxRemRatio).toFixed(3));
</script>

<template>
  <c-card title="px to rem">
    <n-form-item label="Pixel value (px):" label-placement="left">
      <NInputNumber v-model:value="pxInput" />
    </n-form-item>

    <input-copyable label="Corresponding rem value:" label-position="left" :value="remOutput" />
  </c-card>

  <c-card title="rem to px">
    <n-form-item label="Rem value (rem):" label-placement="left">
      <NInputNumber v-model:value="remInput" />
    </n-form-item>

    <input-copyable label="Corresponding px value:" label-position="left" :value="pxOutput" />
  </c-card>
</template>
