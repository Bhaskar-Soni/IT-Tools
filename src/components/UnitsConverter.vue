<script setup lang="ts">
import { ref, computed } from 'vue';
import { NSelect, NInput, NSpace, NCard } from 'naive-ui';
import InputCopyable from './InputCopyable.vue';

interface Props {
  defaultUnit?: string;
  converterType: string;
  supportedUnits: Record<string, string>;
  labelWidth?: string;
}

const props = withDefaults(defineProps<Props>(), {
  defaultUnit: undefined,
  labelWidth: '120px',
});

const inputValue = ref<number | null>(null);
const selectedUnit = ref(props.defaultUnit || Object.keys(props.supportedUnits)[0]);

// Conversion factors for different unit types
const conversionFactors: Record<string, Record<string, number | ((v: number) => number)>> = {
  acceleration: {
    'g-force': 9.81,
    'm/s2': 1,
  },
  area: {
    'm2': 1,
    'km2': 1000000,
    'cm2': 0.0001,
    'mm2': 0.000001,
    'mi2': 2589988.110336,
    'yd2': 0.83612736,
    'ft2': 0.09290304,
    'in2': 0.00064516,
    'ha': 10000,
    'ac': 4046.856,
  },
  length: {
    'm': 1,
    'km': 1000,
    'cm': 0.01,
    'mm': 0.001,
    'μm': 0.000001,
    'nm': 0.000000001,
    'mi': 1609.344,
    'yd': 0.9144,
    'ft': 0.3048,
    'in': 0.0254,
  },
  mass: {
    'kg': 1,
    'g': 0.001,
    'mg': 0.000001,
    'μg': 0.000000001,
    't': 1000,
    'lb': 0.45359237,
    'oz': 0.0283495,
  },
  temperature: {
    'K': (v: number) => v,
    '°C': (v: number) => v + 273.15,
    '°F': (v: number) => (v + 459.67) * (5 / 9),
  },
  volume: {
    'm3': 1,
    'L': 0.001,
    'mL': 0.000001,
    'ft3': 0.0283168,
    'in3': 0.0000163871,
    'gal': 0.00378541,
  },
  energy: {
    'J': 1,
    'kJ': 1000,
    'cal': 4.184,
    'kcal': 4184,
    'Wh': 3600,
    'kWh': 3600000,
  },
  power: {
    'W': 1,
    'kW': 1000,
    'MW': 1000000,
    'hp': 745.7,
    'ps': 735.5,
  },
  speed: {
    'm/s': 1,
    'km/h': 0.277778,
    'mi/h': 0.44704,
    'knot': 0.51444,
    'ft/s': 0.3048,
  },
};

const convertValue = (value: number | null, fromUnit: string, toUnit: string): number | null => {
  if (value === null || value === undefined) return null;
  
  const factors = conversionFactors[props.converterType];
  if (!factors) return value;

  // Handle temperature separately
  if (props.converterType === 'temperature') {
    const fromFactor = factors[fromUnit];
    const toFactor = factors[toUnit];
    
    if (typeof fromFactor === 'function' && typeof toFactor === 'function') {
      const toKelvin = fromFactor(value);
      const reverseFactors: Record<string, (v: number) => number> = {
        'K': (v: number) => v,
        '°C': (v: number) => v - 273.15,
        '°F': (v: number) => (v * 9 / 5) - 459.67,
      };
      return reverseFactors[toUnit]?.(toKelvin) ?? value;
    }
  }

  // For other conversions
  const fromFactor = (typeof factors[fromUnit] === 'number' ? factors[fromUnit] : 1) as number;
  const toFactor = (typeof factors[toUnit] === 'number' ? factors[toUnit] : 1) as number;
  
  return (value * fromFactor) / toFactor;
};

const results = computed(() => {
  if (inputValue.value === null) return {};
  
  const results: Record<string, string> = {};
  
  Object.keys(props.supportedUnits).forEach(unit => {
    const converted = convertValue(inputValue.value!, selectedUnit.value, unit);
    if (converted !== null) {
      results[unit] = converted.toFixed(6).replace(/\.?0+$/, '');
    }
  });
  
  return results;
});
</script>

<template>
  <div class="units-converter">
    <NCard>
      <NSpace vertical :size="16">
        <div class="input-group">
          <label :style="{ width: labelWidth }" class="label">Input Value:</label>
          <NInput 
            :value="inputValue?.toString() || ''" 
            @update:value="(v) => inputValue = v ? parseFloat(v) : null"
            placeholder="Enter value"
            style="flex: 1"
          />
        </div>

        <div class="input-group">
          <label :style="{ width: labelWidth }" class="label">From Unit:</label>
          <NSelect
            v-model:value="selectedUnit"
            :options="Object.entries(supportedUnits).map(([key, label]) => ({
              label,
              value: key,
            }))"
            style="flex: 1"
          />
        </div>

        <div v-if="Object.keys(results).length > 0" class="results">
          <h4>Results:</h4>
          <div class="results-grid">
            <div v-for="(value, unit) in results" :key="unit" class="result-item">
              <div class="result-label">{{ supportedUnits[unit] }}</div>
              <InputCopyable :value="value" />
            </div>
          </div>
        </div>
      </NSpace>
    </NCard>
  </div>
</template>

<style scoped lang="less">
.units-converter {
  width: 100%;

  .input-group {
    display: flex;
    align-items: center;
    gap: 12px;

    .label {
      flex-shrink: 0;
      text-align: right;
      font-weight: 500;
    }
  }

  .results {
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);

    h4 {
      margin: 0 0 12px 0;
      opacity: 0.9;
    }

    .results-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 12px;

      .result-item {
        display: flex;
        flex-direction: column;
        gap: 8px;

        .result-label {
          font-size: 12px;
          opacity: 0.7;
        }
      }
    }
  }
}
</style>
