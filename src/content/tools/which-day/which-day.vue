<script setup lang="ts">

import { useQueryParamOrStorage } from '@/composable/queryParams';

const currentYear = new Date().getFullYear();

const day = useQueryParamOrStorage({ name: 'day', storageName: 'which-day:d', defaultValue: 1 });
const month = useQueryParamOrStorage({ name: 'month', storageName: 'which-day:m', defaultValue: 1 });
const startYear = useQueryParamOrStorage({ name: 'start', storageName: 'which-day:sy', defaultValue: 2000 });
const endYear = useQueryParamOrStorage({ name: 'end', storageName: 'which-day:ey', defaultValue: currentYear });
const error = ref('');

const columns = [
  { title: "Year", key: 'year', align: 'center' },
  { title: "Weekday", key: 'weekday', align: 'center' },
];

const results = computed(() => {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const output: Array<{ year: number; weekday: string }> = [];

  error.value = '';
  try {
    for (let year = startYear.value; year <= endYear.value; year++) {
      const date = new Date(year, month.value - 1, day.value);
      if (date && !Number.isNaN(date)) {
        output.push({
          year,
          weekday: weekdays[date.getDay()],
        });
      }
    }
  }
  catch (e: any) {
    error.value = e.toString();
  }

  return output;
});
</script>

<template>
  <div style="max-width: 700px">
    <NForm label-placement="left">
      <n-space justify="center">
        <NFormItem label="Day in month:">
          <NInputNumber v-model:value="day" :min="1" :max="31" />
        </NFormItem>
        <NFormItem label="Month:">
          <NInputNumber v-model:value="month" :min="1" :max="12" />
        </NFormItem>
      </n-space>
      <n-space justify="center">
        <NFormItem label="Start Year">
          <NInputNumber v-model:value="startYear" />
        </NFormItem>
        <NFormItem label="End Year">
          <NInputNumber v-model:value="endYear" :min="startYear" />
        </NFormItem>
      </n-space>
    </NForm>

    <c-alert v-if="error">
      {{ error }}
    </c-alert>

    <n-data-table v-if="results.length" :columns="columns" :data="results" striped bordered />
  </div>
</template>
