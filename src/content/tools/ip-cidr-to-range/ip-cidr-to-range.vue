<script setup lang="ts">

import isCidr from 'is-cidr';
import { expandCidr } from 'cidr-tools';
import { getIPNetworkType, parseAsCIDR } from '@/utils/ip';
import { useValidation } from '@/composable/validation';
import { useQueryParamOrStorage } from '@/composable/queryParams';

const rawCIDR = useQueryParamOrStorage({ name: 'cidr', storageName: 'ip-cidr-to-range:cidr', defaultValue: '192.168.1.0/24' }); // NOSONAR

const result = computed(() => {
  const parsedCIDR = parseAsCIDR(rawCIDR.value) || rawCIDR.value;
  const ips = [...expandCidr(parsedCIDR)];
  if (!ips || !ips.length) {
    return undefined;
  }

  return {
    startIpAddress: ips.slice(0, 1)[0],
    endIpAddress: ips.slice(-1)[0],
    parsedCIDR,
    networkType: getIPNetworkType(ips.slice(0, 1)[0]) || 'Public',
  };
});

const cidrValidation = useValidation({
  source: rawCIDR,
  rules: [{ message: "Invalid ipv4/6 CIDR", validator: cidr => isCidr(parseAsCIDR(cidr) || cidr) }],
});

const showResult = computed(() => cidrValidation.isValid && result.value !== undefined);
</script>

<template>
  <div>
    <c-input-text
      v-model:value="rawCIDR"
      label=">-"
      placeholder=">-"
      :validation="cidrValidation"
      clearable
    />

    <c-card v-if="showResult" title="Resulting CIDR" mt-4>
      <input-copyable
        label="CIDR"
        label-position="left"
        label-width="150px"
        label-align="right"

        :value="result?.parsedCIDR"
        disabled mb-2
      />
    </c-card>

    <c-card v-if= 'showResult' title= 'IPv4/6 range' mt-4>
      <input-copyable
        label= 'Start IP Address'
        label-position= 'left'
        label-width= '150px'
        label-align= 'right'

        :value="result?.startIpAddress"
        disabled mb-2
      />
      <input-copyable
        label="End IP Address"
        label-position="left"
        label-width="150px"
        label-align="right"

        :value="result?.endIpAddress"
        disabled mb-2
      />

      <input-copyable
        label= 'Network type'
        label-position= 'left'
        label-width= '150px'
        label-align= 'right'

        :value="result?.networkType"
        disabled mb-2
      />
    </c-card>
  </div>
</template>
