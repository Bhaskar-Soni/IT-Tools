<script setup lang="ts">

import InputCopyable from '../../../components/InputCopyable.vue';
import type { Units } from './hdd-calculator.service';
import { getRealSize } from './hdd-calculator.service';
import { useQueryParam } from '@/composable/queryParams';

const dec_units = [
  { value: 'kb', label: "kB" },
  { value: 'mb', label: "MB" },
  { value: 'gb', label: "GB" },
  { value: 'tb', label: "TB" },
  { value: 'pb', label: "PB" },
];
const bin_units = [
  { value: 'kb', label: "KiB" },
  { value: 'mb', label: "MiB" },
  { value: 'gb', label: "GiB" },
  { value: 'tb', label: "TiB" },
  { value: 'pb', label: "PiB" },
];

const claimedCapacity = useQueryParam({ tool: 'hdd-calc', name: 'capacity', defaultValue: 1 });
const claimedUnit = useQueryParam({ tool: 'hdd-calc', name: 'unit', defaultValue: 'tb' });
</script>

<template>
  <div>
    <n-form-item label="Claimed Capacity:">
      <NInputNumber v-model:value="claimedCapacity" :min="1" />
    </n-form-item>
    <c-select
      v-model:value="claimedUnit"
      label="Unit:"
      :options="dec_units"
    />
    <n-p>
      1MiB = 1024KiB ; 1MB = 1000kB ; 1GiB = 1024MiB ; 1GB = 1000MB ;<n-a href="https://en.wikipedia.org/wiki/Byte" target="_blank" rel="noopener">
        see here for details
      </n-a>
    </n-p>

    <n-divider />

    <InputCopyable
      v-for="({ value, label }) in bin_units"
      :key="value"
      :label="`Capacity in ${label}:`"
      :value="getRealSize(claimedCapacity, claimedUnit as Units, value as Units).toFixed(5)"
    />
  </div>
</template>
