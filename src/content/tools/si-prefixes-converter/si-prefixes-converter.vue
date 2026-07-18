<script setup lang="ts">
import { ref, computed } from 'vue';
import Big from 'big.js';
import { useQueryParamOrStorage } from '@/composable/queryParams';
import { NSpace, NFormItem, NSelect, NInputNumber, NSwitch, NText } from 'naive-ui';
import InputCopyable from '@/components/InputCopyable.vue';

interface Prefix {
  label: string
  symbol: string
  exponent: number
};

const prefixes: Prefix[] = [
  { label: 'Quetta (Q)', symbol: 'Q', exponent: 30 },
  { label: 'Ronna (R)', symbol: 'R', exponent: 27 },
  { label: 'Yotta (Y)', symbol: 'Y', exponent: 24 },
  { label: 'Zetta (Z)', symbol: 'Z', exponent: 21 },
  { label: 'Exa (E)', symbol: 'E', exponent: 18 },
  { label: 'Peta (P)', symbol: 'P', exponent: 15 },
  { label: 'Tera (T)', symbol: 'T', exponent: 12 },
  { label: 'Giga (G)', symbol: 'G', exponent: 9 },
  { label: 'Mega (M)', symbol: 'M', exponent: 6 },
  { label: 'Kilo (k)', symbol: 'k', exponent: 3 },
  { label: 'Hecto (h)', symbol: 'h', exponent: 2 },
  { label: 'Deca (da)', symbol: 'da', exponent: 1 },
  { label: 'Unit (1)', symbol: '0', exponent: 0 },
  { label: 'Deci (d)', symbol: 'd', exponent: -1 },
  { label: 'Centi (c)', symbol: 'c', exponent: -2 },
  { label: 'Milli (m)', symbol: 'm', exponent: -3 },
  { label: 'Micro (µ)', symbol: 'µ', exponent: -6 },
  { label: 'Nano (n)', symbol: 'n', exponent: -9 },
  { label: 'Pico (p)', symbol: 'p', exponent: -12 },
  { label: 'Femto (f)', symbol: 'f', exponent: -15 },
  { label: 'Atto (a)', symbol: 'a', exponent: -18 },
  { label: 'Zepto (z)', symbol: 'z', exponent: -21 },
  { label: 'Yocto (y)', symbol: 'y', exponent: -24 },
  { label: 'Ronto (r)', symbol: 'r', exponent: -27 },
  { label: 'Quecto (q)', symbol: 'q', exponent: -30 },
];

const prefixOptions = prefixes.map(p => ({
  label: p.label,
  value: p.symbol,
}));

const fromSymbol = useQueryParamOrStorage('from', 'k');
const toSymbol = useQueryParamOrStorage('to', 'M');
const formatMode = ref<'auto' | 'fixed' | 'exp'>('auto');
const decimals = ref<number>(6);
const thousandSep = ref<boolean>(true);

const inputValue = ref<number | null>(1);

const fromPrefix = computed(() => prefixes.find(p => p.symbol === fromSymbol.value) || prefixes[9]);
const toPrefix = computed(() => prefixes.find(p => p.symbol === toSymbol.value) || prefixes[8]);

// Conversion
const converted = computed(() => {
  if (inputValue.value === null) {
    return null;
  }
  const delta = fromPrefix.value.exponent - toPrefix.value.exponent;
  return new Big(inputValue.value).times(new Big(10).pow(delta));
});

// Formatting pipeline
function formatValue(v: Big): string {
  if (formatMode.value === 'exp') {
    return v.toExponential(decimals.value);
  }

  if (formatMode.value === 'fixed') {
    const fixed = v.toFixed(decimals.value);
    return thousandSep.value ? addThousandSep(fixed) : fixed;
  }

  // AUTO mode
  const abs = v.abs();
  if (abs.gte('1e6') || abs.lte('1e-4')) {
    return v.toExponential(decimals.value);
  }

  const normal = v.toFixed(decimals.value);
  return thousandSep.value ? addThousandSep(normal) : normal;
}

function addThousandSep(str: string): string {
  const [int, dec] = str.split('.');
  const withSep = int.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return dec ? `${withSep}.${dec}` : withSep;
}

const displayValue = computed(() => {
  if (!converted.value) {
    return '';
  }
  return formatValue(converted.value);
});
</script>

<template>
  <div class="si-prefixes-converter">
    <NSpace justify="center" wrap>
      <NFormItem label="Convert" label-placement="left">
        <NInputNumber v-model:value="inputValue" />
        <NSelect
          v-model:value="fromSymbol"
          :options="prefixOptions"
          style="width: 200px; margin-left: 8px"
          filterable
        />
      </NFormItem>
    </NSpace>

    <NSpace justify="center">
      <NFormItem label="Mode" label-placement="left">
        <NSelect
          v-model:value="formatMode"
          :options="[[
            { label: 'Auto', value: 'auto' },
            { label: 'Fixed', value: 'fixed' },
            { label: 'Exponential', value: 'exp' },
          ]]"
          style="width: 200px"
          filterable
        />
      </NFormItem>
      <NFormItem label="Decimals" label-placement="left">
        <NInputNumber v-model:value="decimals" :min="0" :max="60" style="width: 200px" />
      </NFormItem>
      <NFormItem label="Thousand separators" label-placement="left">
        <NSwitch v-model:value="thousandSep" />
      </NFormItem>
    </NSpace>

    <NSpace justify="center" align="center" wrap>
      <NFormItem label="To" label-placement="left">
        <NSelect v-model:value="toSymbol" :options="prefixOptions" style="width: 200px" mr-1 />
        <NText mr-1>
          →
        </NText>
        <input-copyable :value="displayValue" autosize style="width: 400px" />
      </NFormItem>
    </NSpace>
  </div>
</template>

<style scoped>
.si-prefixes-converter :deep(.n-input),
.si-prefixes-converter :deep(.n-input-number),
.si-prefixes-converter :deep(.n-base-selection) {
  background: #1b2028;
  border-color: #2a313b;
  box-shadow: inset 0 0 0 1px rgba(88, 166, 255, 0.08);
}

.si-prefixes-converter :deep(.n-input__input-el),
.si-prefixes-converter :deep(.n-base-selection-label) {
  color: var(--text-primary);
}

.si-prefixes-converter :deep(.n-base-selection-placeholder) {
  color: var(--text-secondary);
}

.si-prefixes-converter :deep(.n-base-selection:hover),
.si-prefixes-converter :deep(.n-input-number:hover),
.si-prefixes-converter :deep(.n-input:hover) {
  border-color: #3a4350;
}
</style>
