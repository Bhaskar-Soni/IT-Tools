<script setup lang="ts">

import GenerateSchema from 'generate-schema';
import JSON5 from 'json5';
import convert from 'jsonschema-protobuf';
import FormatTransformer from '@/components/FormatTransformer.vue';
import type { UseValidationRule } from '@/composable/validation';

const rootName = ref<string>('RootName');

function transformer(value: string) {
  try {
    const object = JSON5.parse(value);
    const schema = JSON.stringify({ ...{ name: rootName.value }, ...GenerateSchema.json(rootName.value, object) });
    return convert(schema);
  }
  catch (e: any) {
    return e.toString();
  }
}

const rules: UseValidationRule<string>[] = [
  {
    validator: (v: string) => v === '' || JSON5.parse(v),
    message: "Provided JSON is not valid.",
  },
];
</script>

<template>
  <c-input-text v-model:value="rootName" label="Root Name:" label-placement="left" />

  <FormatTransformer
    input-label="Your JSON"
    input-placeholder="Paste your JSON here..."
    output-label="ProtoBuf version of your JSON objects:"
    :input-validation-rules="rules"
    :transformer="transformer"
    output-language="protobuf"
  />
</template>
