<script setup lang="ts">

import _ from 'lodash';
import { type Unit, convertMany } from 'convert';
import { computed } from 'vue';
import allUnits from './allunits.json';
import { useQueryParam } from '@/composable/queryParams';
import { useToolStore } from '@/stores/tool.store';

const toolStore = useToolStore();

const unitsConversionTools = computed(() => _.orderBy(
  _.filter(toolStore.tools, t => t.keywords?.includes('units')),
  'name', 'asc'));

const allUnitsSorted = _.uniq(allUnits).sort();

const inputExpression = useQueryParam({ tool: 'many-units-conv', name: 'expr', defaultValue: '' });
const outputUnit = useQueryParam({ tool: 'many-units-conv', name: 'unit', defaultValue: '' });
const result = computed(() => {
  try {
    const best = convertMany(inputExpression.value).to('best');
    try {
      return {
        best,
        selected: outputUnit.value
          ? convertMany(inputExpression.value).to(outputUnit.value as Unit)
          : '',
      };
    }
    catch (e: any) {
      return {
        best,
        error: e.toString(),
      };
    }
  }
  catch (e: any) {
    return {
      error: e.toString(),
    };
  }
});
</script>

<template>
  <div>
    <c-input-text
      v-model:value="inputExpression"
      label="Units expression"
      placeholder="Please enter an unit expression, ie '1d 2m'"
      mb-2
    />
    <c-select
      v-model:value="outputUnit"
      label-position="left"
      label-width="100px"
      label="Target Unit:"
      :options="allUnitsSorted"
      placeholder="Select the target unit"
      searchable
    />

    <n-divider />

    <c-card v-if="result.best" title="Result" mb-2>
      <input-copyable label="Best Target Unit" :value="result.best" mb-1 />
      <input-copyable v-if="result.selected" :label="$t('tools.many-units-converter.texts.label-selected-target-unit-outputunit', [outputUnit])" :value="result.selected" />
    </c-card>
    <c-alert v-if="result.error && inputExpression" mb-2>
      {{ result.error }}
    </c-alert>

    <n-card title="Other Units Conversion Tools" mx-auto>
      <n-table>
        <thead>
          <tr>
            <th>
              Name
            </th>
            <th>
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(tool, ix) in unitsConversionTools" :key="ix">
            <td>
              <c-link :to="tool.path" class="decoration-none" target="_blank">
                {{ tool.name }}
              </c-link>
            </td>
            <td>
              {{ tool.description }}
              <br>
              -&gt; {{ tool.keywords?.join(', ') }}
            </td>
          </tr>
        </tbody>
      </n-table>
    </n-card>
  </div>
</template>
