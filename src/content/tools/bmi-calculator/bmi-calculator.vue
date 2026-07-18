<script setup lang="ts">
const units = ref('metric');
const weight = ref<number | null>(null);
const height = ref<number | null>(null);

const options = [
  { label: "Metric (kg, m)", value: 'metric' },
  { label: "US (lbs, in)", value: 'us' },
];

const bmi = computed(() => {
  if (!weight.value || !height.value) {
    return null;
  }
  let convertedWeight = weight.value;
  let convertedHeight = height.value;

  if (units.value === 'us') {
    convertedWeight = weight.value * 0.453592; // lbs to kg
    convertedHeight = height.value * 0.0254; // inches to meters
  }

  return (convertedWeight / (convertedHeight * convertedHeight)).toFixed(2);
});

const bmiCategory = computed(() => {
  if (!bmi.value) {
    return '';
  }
  const value = Number.parseFloat(bmi.value);
  if (value < 18.5) {
    return 'Underweight';
  }
  if (value < 24.999) {
    return 'Normal weight';
  }
  if (value < 29.999) {
    return 'Overweight';
  }
  if (value < 34.999) {
    return 'Class 1 Obesity';
  }
  if (value < 39.999) {
    return 'Class 2 Obesity';
  }
  return 'Severe Obesity (Class 3 Obesity)';
});
</script>

<template>
  <c-card title="BMI Calculator" max-w-800px>
    <c-select v-model:value="units" label="Select Units:" :options="options" mb-2 label-position="left" />
    <n-space justify="space-evenly">
      <n-form-item :label="`Weight (${(units === 'metric' ? 'kg' : 'lbs')}):`" label-placement="left" mb-2>
        <NInputNumber v-model:value="weight" placeholder="Enter weight" />
      </n-form-item>
      <n-form-item :label="`Height (${(units === 'metric' ? 'm' : 'in')}):`" label-placement="left" mb-2>
        <NInputNumber v-model:value="height" placeholder="Enter height" />
      </n-form-item>
    </n-space>
    <c-card v-if="bmi" title="Result">
      <input-copyable label="BMI:" label-position="left" label-width="100px" :value="bmi" mb-1 />
      <input-copyable label="Category:" label-position="left" label-width="100px" :value="bmiCategory" />
    </c-card>
  </c-card>
</template>
