<script setup lang="ts">
import { useVModel } from '@vueuse/core';
import { useCopy } from '@/composable/copy';

const props = withDefaults(defineProps<{ value?: string | number }>(), { value: '' });
const emit = defineEmits(['update:value']);

const value = useVModel(props, 'value', emit, { passive: true });
const stringValue = computed(() => value.value == null ? '' : String(value.value));
const { copy, isJustCopied } = useCopy({ source: stringValue, createToast: false });
const tooltipText = computed(() => isJustCopied.value ? 'Copied!' : 'Copy to clipboard');
</script>

<template>
  <c-input-text v-model:value="stringValue" readonly>
    <template #suffix>
      <c-tooltip :tooltip="tooltipText">
        <c-button circle variant="text" size="small" @click="copy()">
          <icon-mdi-content-copy />
        </c-button>
      </c-tooltip>
    </template>
  </c-input-text>
</template>
