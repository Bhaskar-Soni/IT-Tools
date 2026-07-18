<script setup lang="ts">

import { computeCost } from './energy-computer.service';
import { useQueryParam } from '@/composable/queryParams';

const wattage = useQueryParam({ tool: 'energy-computer', name: 'wattage', defaultValue: 100 });
const durationHours = useQueryParam({ tool: 'energy-computer', name: 'hours', defaultValue: 2 });
const kWhCost = useQueryParam({ tool: 'energy-computer', name: 'cost', defaultValue: 0.1 });
const totalCost = computed(() => computeCost(wattage.value, durationHours.value, kWhCost.value));
</script>

<template>
  <div>
    <n-form-item label="Device Wattage (W)" mb-1>
      <NInputNumber v-model:value="wattage" :min="0" />
    </n-form-item>
    <n-form-item label="Usage Duration (hours)" mb-1>
      <NInputNumber v-model:value="durationHours" :min="0" />
    </n-form-item>
    <n-form-item label="kWh Cost" mb-1>
      <NInputNumber v-model:value="kWhCost" :min="0" />
    </n-form-item>

    <n-divider />

    <input-copyable label="Total Cost" :value="totalCost.toFixed(3)" />
  </div>
</template>
