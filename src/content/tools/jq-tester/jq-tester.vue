<script setup lang="ts">

import JSON5 from 'json5';
import jsonpath from 'jsonpath';
import * as jq from 'jq-wasm';
import TextareaCopyable from '@/components/TextareaCopyable.vue';
import { useValidation } from '@/composable/validation';
import { useQueryParam } from '@/composable/queryParams';

type JQType = 'jq' | 'jsonpath';
const indent = 2;

const jqOrJsonPath = useQueryParam({ tool: 'jq-tester', name: 'expr', defaultValue: '' });
const json = ref('');
const jqtype = useQueryParam<JQType>({ tool: 'jq-tester', name: 'type', defaultValue: 'jq' });
const jqtypes = [
  { value: 'jq', label: "jq" },
  { value: 'jsonpath', label: "JSONPath" },
];

const result = computedAsync(async () => {
  const jqOrJsonPathString = jqOrJsonPath.value;
  const jsonString = json.value;
  const jqtypeValue = jqtype.value;

  try {
    const obj = JSON.parseBigNum(jsonString);
    if (jqtypeValue === 'jq') {
      return JSON.stringify(await jq.json(obj, jqOrJsonPathString), null, indent);
    }
    return JSON.stringify(jsonpath.query(obj, jqOrJsonPathString), null, indent);
  }
  catch (e: any) {
    return e.toString();
  }
});

const jsonValidation = useValidation({
  source: json,
  rules: [
    {
      validator: v => JSON5.parse(v),
      message: "Provided JSON is not valid.",
    },
  ],
});
</script>

<template>
  <div>
    <c-card title="Input" mb-2>
      <c-input-text
        v-model:value="jqOrJsonPath"
        label="jq or JSONPath"
        placeholder="Put your jq or JSONPath here..."
        mb-2
      />

      <div mb-2 flex justify-center>
        <n-radio-group v-model:value="jqtype" name="jqtype">
          <n-space>
            <n-radio
              v-for="type in jqtypes"
              :key="type.value"
              :value="type.value"
              :label="type.label"
            />
          </n-space>
        </n-radio-group>
      </div>

      <div mb-2 flex justify-center>
        <c-link v-if="jqtype === 'jq'" target="_blank" to="/jq-memo" mb-1 mt-1>
          See
          <code>
            jq
          </code>
          Cheatsheet
        </c-link>
        <c-link v-if="jqtype === 'jsonpath'" target="_blank" to="/jsonpath-memo" mb-1 mt-1>
          See JSONPath Cheatsheet
        </c-link>
      </div>

      <c-input-text
        v-model:value="json"
        label="JSON"
        multiline
        placeholder="Put your JSON here..."
        rows="5"
        :validation="jsonValidation"
        mb-2
      />
    </c-card>

    <c-card title="Result">
      <TextareaCopyable :value="result" language="json" />
    </c-card>
  </div>
</template>
