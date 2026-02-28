<script setup lang="ts">

import JSON5 from 'json5';
import { InputData, jsonInputForTargetLanguage, quicktype } from 'quicktype-core';
import type { UseValidationRule } from '@/composable/validation';
import TextareaCopyable from '@/components/TextareaCopyable.vue';
import { useQueryParamOrStorage } from '@/composable/queryParams';

const defaultValue = `{
  a:"n",
  arr: [1, 2], 
  nested: {
    a:1,
    b:"2"
  }
}`;
const jsonInput = ref(defaultValue);
const rootName = useQueryParamOrStorage({ name: 'root', storageName: 'json-ts:r', defaultValue: 'MyType' });
const interfacesOnly = useQueryParamOrStorage({ name: 'interfaces', storageName: 'json-ts:i', defaultValue: false });
const transformPropertyNames = useQueryParamOrStorage({ name: 'js', storageName: 'json-ts:t', defaultValue: false });
const explicitlyNameUnions = useQueryParamOrStorage({ name: 'nameunion', storageName: 'json-ts:eu', defaultValue: false });
const verifyJsonParseResults = useQueryParamOrStorage({ name: 'valid', storageName: 'json-ts:v', defaultValue: true });
const preferUnionTypeOverEnum = useQueryParamOrStorage({ name: 'unionenum', storageName: 'json-ts:u', defaultValue: false });
const preferTypesOverInterfaces = useQueryParamOrStorage({ name: 'types', storageName: 'json-ts:typ', defaultValue: false });
const useStringInsteadOfEnumForSingleValueEnums = useQueryParamOrStorage({ name: 'stringenums', storageName: 'json-ts:str', defaultValue: false });
const useReadonlyTypeMembers = useQueryParamOrStorage({ name: 'ro', storageName: 'json-ts:ro', defaultValue: false });
const optionalProperties = useQueryParamOrStorage({ name: 'optional', storageName: 'json-ts:opt', defaultValue: false });

async function convertJsonToTypescript(
  json: string,
  options: {
    rootName: string
    optionalProperties?: boolean
    interfacesOnly?: boolean
    transformPropertyNames?: boolean
    explicitlyNameUnions?: boolean
    verifyJsonParseResults?: boolean
    preferUnionTypeOverEnum?: boolean
    preferTypesOverInterfaces?: boolean
    useStringInsteadOfEnumForSingleValueEnums?: boolean
    useReadonlyTypeMembers?: boolean
  },
): Promise<string> {
  const targetLanguage = 'typescript';
  const inputData = new InputData();
  const jsonInput = jsonInputForTargetLanguage(targetLanguage);

  await jsonInput.addSource({ name: options.rootName, samples: [JSON.stringify(JSON5.parse(json))] });
  inputData.addInput(jsonInput);

  const { lines } = await quicktype({
    inputData,
    lang: targetLanguage,
    topLevel: options.rootName,
    allPropertiesOptional: options.optionalProperties,
    rendererOptions: {
      'just-types': options.interfacesOnly,
      'prefer-unions': options.preferUnionTypeOverEnum,
      'explicit-unions': options.explicitlyNameUnions,
      'runtime-typecheck': options.verifyJsonParseResults,
      'nice-property-names': options.transformPropertyNames,
      'prefer-const-values': options.useStringInsteadOfEnumForSingleValueEnums,
      'readonly': options.useReadonlyTypeMembers,
      'prefer-types': options.preferTypesOverInterfaces,
    },
  } as any);

  return lines.join('\n');
}

const tsOutput = computedAsync(async () => {
  try {
    return await convertJsonToTypescript(jsonInput.value,
      {
        rootName: rootName.value,
        interfacesOnly: interfacesOnly.value,
        transformPropertyNames: transformPropertyNames.value,
        explicitlyNameUnions: explicitlyNameUnions.value,
        verifyJsonParseResults: verifyJsonParseResults.value,
        preferUnionTypeOverEnum: preferUnionTypeOverEnum.value,
        preferTypesOverInterfaces: preferTypesOverInterfaces.value,
        useStringInsteadOfEnumForSingleValueEnums: useStringInsteadOfEnumForSingleValueEnums.value,
        useReadonlyTypeMembers: useReadonlyTypeMembers.value,
        optionalProperties: optionalProperties.value,
      },
    );
  }
  catch (e: any) {
    return e.toString();
  }
});

const rules: UseValidationRule<string>[] = [
  {
    validator: (v: string) => v === '' || JSON5.parse(v),
    message: "Provided JSON is not valid.",
  },
];
</script>

<template>
  <c-card title="JSON to Typescript">
    <c-input-text
      v-model:value="jsonInput"
      multiline
      placeholder="Put your json string here..."
      rows="20"
      label="JSON to Typescript"
      :validation-rules="rules"
      raw-text
      mb-5
    />
    <n-space justify="center">
      <c-input-text v-model:value="rootName" label="Root Name" />
      <n-checkbox v-model:checked="interfacesOnly">
        Use Interfaces Only
      </n-checkbox>
      <n-checkbox v-model:checked="transformPropertyNames">
        Transform Property Names to JavaScripty
      </n-checkbox>
      <n-checkbox v-model:checked="explicitlyNameUnions">
        Explicitly Name Unions
      </n-checkbox>
      <n-checkbox v-model:checked="verifyJsonParseResults">
        Verify JSON.parse results at runtime
      </n-checkbox>
      <n-checkbox v-model:checked="preferUnionTypeOverEnum">
        Use Union Type Instead of Enum
      </n-checkbox>
      <n-checkbox v-model:checked="preferTypesOverInterfaces">
        Use Types Instead of Interfaces
      </n-checkbox>
      <n-checkbox v-model:checked="useStringInsteadOfEnumForSingleValueEnums">
        Use String Instead of Enum for Single Value Enums
      </n-checkbox>
      <n-checkbox v-model:checked="useReadonlyTypeMembers">
        Use Readonly Type Members
      </n-checkbox>
      <n-checkbox v-model:checked="optionalProperties">
        Make All Properties Optional
      </n-checkbox>
    </n-space>
  </c-card>
  <c-card title="Your Typescript code">
    <TextareaCopyable
      :value="tsOutput"
      language="typescript"
      download-file-name="output.ts"
    />
  </c-card>
</template>
