<script setup lang="ts">

import { Check as CheckIcon, LetterX as CrossIcon } from '@vicons/tabler';
import { getMatch } from 'ip-matching';
import { cidrInCidr } from './cidr-in-cidr.service';
import { withDefaultOnError } from '@/utils/defaults';
import { isNotThrowing } from '@/utils/boolean';
import SpanCopyable from '@/components/SpanCopyable.vue';
import { useQueryParamOrStorage } from '@/composable/queryParams';

const baseRange = useQueryParamOrStorage({ name: 'range', storageName: 'cidr-in-cidr:range', defaultValue: '192.168.0.1/24' }); // NOSONAR
const ipOrRangeToTest = useQueryParamOrStorage({ name: 'ip', storageName: 'cidr-in-cidr:ip', defaultValue: '192.168.0.1' }); // NOSONAR

const matchResult = computed(() => withDefaultOnError(
  () => cidrInCidr({ baseRange: baseRange.value, ipOrRangeToTest: ipOrRangeToTest.value }),
  { baseSubnets: [], isIncluded: false }));

const rangeValidationRules = [
  {
    message: "We cannot parse this CIDR/IP Range/Mask/Wildcard, check the format",
    validator: (value: string) => isNotThrowing(() => getMatch(value)) && getMatch(value),
  },
];
</script>

<template>
  <div>
    <c-input-text
      v-model:value="baseRange"
      label="An IPv4/6 CIDR/Range/Mask/Wildcard (base network)"
      placeholder="The ipv4/6 CIDR..."
      :validation-rules="rangeValidationRules"
      mb-4
    />

    <c-input-text
      v-model:value="ipOrRangeToTest"
      label="An IPv4/6 CIDR/Range/Mask/Wildcard (to test for inclusion)"
      placeholder="The An IPv4/6 CIDR/Range/Mask/Wildcard..."
      :validation-rules="rangeValidationRules"
      mb-4
    />

    <n-divider />

    <div flex justify-center>
      <span v-if="matchResult.isIncluded">
        <n-icon color="green">
          <CheckIcon />
        </n-icon>Included</span>
      <span v-else>
        <n-icon color="red">
          <CrossIcon />
        </n-icon>Not included</span>
    </div>

    <n-divider />

    <c-card title="Subnets">
      <n-table>
        <tbody>
          <tr v-for="{ cidr, start, end } in matchResult.baseSubnets" :key="cidr">
            <td font-bold>
              <SpanCopyable :value="cidr" />
            </td>
            <td>
              <SpanCopyable :value="start" />
            </td>
            <td>
              <SpanCopyable :value="end" />
            </td>
          </tr>
        </tbody>
      </n-table>
    </c-card>
  </div>
</template>
