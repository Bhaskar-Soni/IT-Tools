<script setup lang="ts">

import { Netmask } from 'netmask';
import { withDefaultOnError } from '@/utils/defaults';
import { isNotThrowing } from '@/utils/boolean';
import SpanCopyable from '@/components/SpanCopyable.vue';
import type { SubnetInfo } from '@/utils/ip';
import { getSubnetsInfos, parseAsCIDR } from '@/utils/ip';
import { useITStorage } from '@/composable/queryParams';

const ip = useITStorage('ipv4-subnets-list:ip', '192.168.0.0/24');

const getNetworkInfo = (address: string) => new Netmask(parseAsCIDR(address.trim()) || address.trim());

const networkInfo = computed(() => withDefaultOnError(() => getNetworkInfo(ip.value), undefined));

const allSubnetsInfos = computed(() => withDefaultOnError(() => {
  let bitmask = networkInfo.value?.bitmask;
  if (!bitmask || bitmask < 16) {
    return [];
  }

  const base = networkInfo.value?.base;
  const subnets: { bitmask: number; hostsPerSubnet: number; subnets: SubnetInfo[] }[] = [];
  for (;bitmask <= 30; bitmask++) {
    const bitmaskSubnets = getSubnetsInfos(`${base}/${bitmask}`);
    subnets.push({ bitmask, hostsPerSubnet: bitmaskSubnets[0]?.hostsCount, subnets: bitmaskSubnets });
  }
  return subnets;
}, undefined));

const ipValidationRules = [
  {
    message: "We cannot parse this address, check the format",
    validator: (value: string) => isNotThrowing(() => getNetworkInfo(value)),
  },
];
</script>

<template>
  <div>
    <c-input-text
      v-model:value="ip"
      label="An IPv4 address with or without mask (CIDR/IP Range/Wildcard IP/IP Mask)"
      placeholder="IPv4 or cidr..."
      :validation-rules="ipValidationRules"
      mb-4
    />

    <div v-if="networkInfo && allSubnetsInfos?.length">
      <c-card v-for="{ bitmask, hostsPerSubnet, subnets } in allSubnetsInfos" :key="bitmask" :title="`${networkInfo.base}/${bitmask} (${subnets.length} subnets; ${hostsPerSubnet} hosts)`" mb-2>
        <n-table>
          <thead>
            <tr>
              <th>Network</th>
              <th>First IP</th>
              <th>Last IP</th>
              <th>Broadcast</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="subnet in subnets" :key="subnet.netAddress">
              <td font-bold>
                <SpanCopyable :value="subnet.netAddress" />
              </td>
              <td>
                <SpanCopyable :value="subnet.firstIP" />
              </td>
              <td>
                <SpanCopyable :value="subnet.lastIP" />
              </td>
              <td>
                <SpanCopyable :value="subnet.broadcastIP" />
              </td>
            </tr>
          </tbody>
        </n-table>
      </c-card>
    </div>
  </div>
</template>
