<script setup lang="ts">

import { formatDuration, intervalToDuration } from 'date-fns';
import SpanCopyable from '@/components/SpanCopyable.vue';
import { useQueryParam } from '@/composable/queryParams';

const days = useQueryParam({ tool: 'ttl-calc', name: 'd', defaultValue: 0 });
const hours = useQueryParam({ tool: 'ttl-calc', name: 'h', defaultValue: 24 });
const minutes = useQueryParam({ tool: 'ttl-calc', name: 'm', defaultValue: 0 });
const seconds = useQueryParam({ tool: 'ttl-calc', name: 's', defaultValue: 0 });
const ttlDisplay = computed(() => (days.value * 86400 + hours.value * 3600 + minutes.value * 60 + seconds.value).toString());

const ttl = ref(0);
const timeDisplay = computed(() => formatDuration(intervalToDuration({ start: 0, end: ttl.value * 1000 })));
</script>

<template>
  <div>
    <c-card title="Time to TTL" mb-3>
      <n-space>
        <n-form-item label="Days">
          <NInputNumber v-model:value="days" :min="0" />
        </n-form-item>
        <n-form-item label="Hours">
          <NInputNumber v-model:value="hours" :min="0" />
        </n-form-item>
        <n-form-item label="Minutes">
          <NInputNumber v-model:value="minutes" :min="0" />
        </n-form-item>
        <n-form-item label="Seconds">
          <NInputNumber v-model:value="seconds" :min="0" />
        </n-form-item>
      </n-space>

      <n-divider />

      <n-form-item label="TTL" label-placement="left">
        <SpanCopyable :value="ttlDisplay" />
      </n-form-item>
    </c-card>

    <c-card title="TTL to Time">
      <n-form-item label="TTL">
        <NInputNumber v-model:value="ttl" :min="0" />
      </n-form-item>

      <n-divider />

      <n-form-item label="Time">
        <SpanCopyable :value="timeDisplay" />
      </n-form-item>
    </c-card>
  </div>
</template>

