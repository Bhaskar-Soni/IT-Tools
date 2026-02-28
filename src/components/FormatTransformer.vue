<script setup lang="ts">
import _ from 'lodash';
import type { UseValidationRule } from '@/composable/validation';
import CInputText from '@/ui/c-input-text/c-input-text.vue';

const props = withDefaults(
  defineProps<{
    transformer?: (v: string) => string
    inputValidationRules?: UseValidationRule<string>[]
    inputLabel?: string
    inputPlaceholder?: string
    inputDefault?: string
    outputLabel?: string
    outputLanguage?: string
    downloadFileName?: string
    rows?: number | string
    inputAutosize?: boolean
    inputLineNumbers?: boolean
  }>(),
  {
    transformer: _.identity,
    inputValidationRules: () => [],
    inputLabel: 'Input',
    inputDefault: '',
    inputPlaceholder: 'Input...',
    outputLabel: 'Output',
    outputLanguage: '',
    downloadFileName: undefined,
    rows: 20,
    inputAutosize: true,
    inputLineNumbers: false,
  },
);

const { transformer, inputValidationRules, inputLabel, outputLabel, outputLanguage, inputPlaceholder, inputDefault, downloadFileName, rows, inputAutosize }
  = toRefs(props);

const inputElement = ref<typeof CInputText>();

const input = ref(inputDefault.value);
const output = computed(() => transformer.value(input.value));
</script>

<template>
  <CInputText
    ref="inputElement"
    v-model:value="input"
    :placeholder="inputPlaceholder"
    :label="inputLabel"
    :rows="rows"
    :autosize="inputAutosize"
    raw-text
    multiline
    test-id="input"
    :validation-rules="inputValidationRules"
    monospace
  />

  <div overflow-auto>
    <div mb-5px>
      {{ outputLabel }}
    </div>
    <textarea-copyable
      :value="output"
      :language="outputLanguage"
      :follow-height-of="inputElement?.inputWrapperRef"
      :download-file-name="downloadFileName"
    />
  </div>
</template>
