<script setup lang="ts">
import InputCopyable from '../../../components/InputCopyable.vue';
import { UUID2HEX, getVersion, normalizeUUID } from './uuid-converter.service';
import { useQueryParam } from '@/composable/queryParams';
const input = useQueryParam({ tool: 'uuid-conv', name: 'd', defaultValue: '' });

const formats = computed(() => [
  {
    label: "UUID",
    value: normalizeUUID(input.value),
  },
  {
    label: "HEX notation (upper)",
    value: UUID2HEX(input.value, true),
  },
  {
    label: "HEX notation (lower)",
    value: UUID2HEX(input.value, false),
  },
  {
    label: "RFC Version",
    value: getVersion(input.value).toString(),
  },
]);

const inputLabelAlignmentConfig = {
  labelPosition: 'left',
  labelWidth: '120px',
  labelAlign: 'right',
};
</script>

<template>
  <c-card>
    <c-input-text
      v-model:value="input"
      autofocus label="Your Input" placeholder="Your UUID with/without hyphen" raw-text
      v-bind="inputLabelAlignmentConfig"
    />

    <div my-16px divider />

    <InputCopyable
      v-for="format in formats" :key="format.label" :value="format.value" :label="format.label"
      :readonly="true" v-bind="inputLabelAlignmentConfig" mb-1
    />
  </c-card>
</template>
