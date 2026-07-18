<script setup lang="ts">
import UnitsConverter from '@/components/UnitsConverter.vue';

const supportedUnits = {
  'Pm': 'petameter',
  'Tm': 'terameter',
  'Gm': 'gigameter',
  'Mm': 'megameter',
  'km': 'kilometer',
  'hm': 'hectometer',
  'dam': 'decameter',
  'm': 'meter',
  'dm': 'decimeter',
  'cm': 'centimeter',
  'mm': 'millimeter',
  'μm': 'micrometer',
  'nm': 'nanometer',
  'pm': 'picometer',
  'fm': 'femtometer',
  'am': 'attometer',
  'mi': 'mile',
  'yd': 'yard',
  'ft': 'foot',
  'in': 'inch',
  'mil': 'mil',
  'pc': 'parsec',
  'ly': 'light-year',
  'au': 'astronomical unit',
};
</script>

<template>
  <UnitsConverter default-unit="m" converter-type="length" :supported-units="supportedUnits" label-width="150px" />
</template>
