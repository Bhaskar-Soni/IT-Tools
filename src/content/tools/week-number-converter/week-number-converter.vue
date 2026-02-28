<script setup lang="ts">

import { getISOWeek, getWeek, getWeekOfMonth } from 'date-fns';
import { getFirstMondayFromISOWeek, getFirstMondayFromMonthWeek } from './week-number-converter.service';
import { useQueryParam } from '@/composable/queryParams';
import { withDefaultOnError } from '@/utils/defaults';

const now = new Date();

function toISODateString(d: Date) {
  return d.toISOString().substring(0, 10);
}

const inputDateString = useQueryParam({ tool: 'week-num-conv', name: 'date', defaultValue: toISODateString(now) });
const inputDate = computed({
  get() { return withDefaultOnError(() => new Date(inputDateString.value).getTime(), now.getTime()); },
  set(newDate) { inputDateString.value = toISODateString(new Date(newDate)); },
});
const outputWeekInMonth = computed(() => getWeekOfMonth(inputDate.value));
const outputLocalWeekInYear = computed(() => getWeek(inputDate.value));
const outputISOWeekInYear = computed(() => getISOWeek(inputDate.value));

const inputWeekInMonth = ref({
  week: getWeekOfMonth(now),
  month: now.getMonth() + 1,
  year: now.getFullYear(),
});
const outputWeekInMonthMonday = computed(() => getFirstMondayFromMonthWeek(inputWeekInMonth.value.week, inputWeekInMonth.value.month, inputWeekInMonth.value.year));

const inputWeekInYear = ref({
  week: getWeek(now),
  year: now.getFullYear(),
});
const outputWeekInYearMonday = computed(() => getFirstMondayFromISOWeek(inputWeekInYear.value.week, inputWeekInYear.value.year));
</script>

<template>
  <div>
    <c-card title="Date to Week numbers" mb-2>
      <n-form-item label="Date:" label-placement="left">
        <n-date-picker v-model:value="inputDate" type="date" />
      </n-form-item>

      <n-divider />

      <input-copyable readonly label="Local Week in Year:" label-position="left" label-width="130px" :value="outputLocalWeekInYear" mb-1 />
      <input-copyable readonly label="ISO Week (in Year):" label-position="left" label-width="130px" :value="outputISOWeekInYear" mb-1 />
      <input-copyable readonly label="Week in month:" label-position="left" label-width="130px" :value="outputWeekInMonth" mb-1 />
    </c-card>
    <c-card title="ISO Week number to date" mb-2>
      <div flex items-baseline gap-2>
        <n-form-item label="ISO Week number:" label-placement="left" flex-1>
          <NInputNumber v-model:value="inputWeekInYear.week" :min="1" :max="53" />
        </n-form-item>
        <n-form-item label="Year:" label-placement="left" flex-1>
          <NInputNumber v-model:value="inputWeekInYear.year" />
        </n-form-item>
      </div>

      <n-divider />

      <input-copyable readonly label="First Monday" label-position="left" :value="outputWeekInYearMonday.toString()" />
    </c-card>
    <c-card title="Week number in month to date" mb-2>
      <div flex items-baseline gap-2>
        <n-form-item label="Week in month:" label-placement="left" flex-1>
          <NInputNumber v-model:value="inputWeekInMonth.week" :min="1" :max="5" />
        </n-form-item>
        <n-form-item label="Month:" label-placement="left" flex-1>
          <NInputNumber v-model:value="inputWeekInMonth.month" :min="1" :max="12" />
        </n-form-item>
        <n-form-item label="Year:" label-placement="left" flex-1>
          <NInputNumber v-model:value="inputWeekInMonth.year" />
        </n-form-item>
      </div>

      <n-divider />

      <input-copyable readonly label="First Monday" label-position="left" :value="outputWeekInMonthMonday.toString()" />
    </c-card>
  </div>
</template>

