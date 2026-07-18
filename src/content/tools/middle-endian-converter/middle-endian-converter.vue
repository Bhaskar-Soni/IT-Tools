<script setup lang="ts">

import { convertEndian, formatInteger } from './middle-endian-converter.service';

const inputHex = ref('');
const bitLength = ref(32);
const middleEndianType = ref('byte-swapped');
const result = computed(() => {
  try {
    const converted = convertEndian(inputHex.value, bitLength.value as never, middleEndianType.value as never);
    return {
      error: '',
      ...converted,
      ...formatInteger(converted.littleEndian),
    };
  }
  catch (e: any) {
    return {
      error: e.toString(),
      bigEndian: '',
      littleEndian: '',
      octal: '',
      decimal: '',
      hexadecimal: '',
    };
  }
});

const bitOptions = [
  { label: "16-bit", value: 16 },
  { label: "32-bit", value: 32 },
  { label: "64-bit", value: 64 },
];

const middleEndianOptions = [
  { label: "Byte-Swapped", value: 'byte-swapped' },
  { label: "Word-Swapped", value: 'word-swapped' },
];
</script>

<template>
  <n-card title="Endian Converter" style="max-width: 700px; margin: auto;">
    <n-space vertical>
      <n-input
        v-model:value="inputHex"
        placeholder="Enter hex (e.g., 3412ABCD)"
        clearable
      />
      <n-select
        v-model:value="bitLength"
        :options="bitOptions"
        label="Bit Length"
        placeholder="Select bit length"
      />
      <n-select
        v-model:value="middleEndianType"
        :options="middleEndianOptions"
        label="Middle Endian Type"
        placeholder="Select middle-endian format"
      />
      <c-alert v-if="inputHex && result.error">
        {{ result.error }}
      </c-alert>
      <n-card v-if="inputHex && !result.error" title="Conversion result">
        <input-copyable label="Big Endian:" label-width="120px" label-position="left" :value="result.bigEndian" />
        <input-copyable label="Little Endian:" label-width="120px" label-position="left" :value="result.littleEndian" />
        <input-copyable label="Decimal:" label-width="120px" label-position="left" :value="result.decimal" mt-2 />
        <input-copyable label="Octal:" label-width="120px" label-position="left" :value="result.octal" />
        <input-copyable label="Hexadecimal:" label-width="120px" label-position="left" :value="result.hexadecimal" />
      </n-card>
    </n-space>
  </n-card>
</template>
