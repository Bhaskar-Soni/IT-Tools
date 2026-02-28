<script setup lang="ts">

import { useEventListener } from '@vueuse/core';

import InputCopyable from '../../../components/InputCopyable.vue';
import { getScancode } from './scancode';
import { useITStorage } from '@/composable/queryParams';

const event = ref<KeyboardEvent>();

const layout = useITStorage('keycode-info:l', 'AZERTY');
const layoutOptions = ['AZERTY', 'QWERTY', 'QWERTZ', 'DVORAK', 'JIS', 'RUSSIAN', 'NORDIC'];

useEventListener(document, 'keydown', (e) => {
  event.value = e;
});

const fields = computed(() => {
  if (!event.value) {
    return [];
  }

  return [
    {
      label: "Key :",
      value: event.value.key,
      placeholder: 'Key name...',
    },
    {
      label: "Keycode :",
      value: String(event.value.keyCode),
      placeholder: 'Keycode...',
    },
    {
      label: "Code :",
      value: event.value.code,
      placeholder: 'Code...',
    },
    {
      label: "Scancode (hex) :",
      value: getScancode(event.value.code, layout.value)?.scancode?.toString(16) || '',
      placeholder: 'Scancode...',
    },
    {
      label: "Scancode (dec) :",
      value: getScancode(event.value.code, layout.value)?.scancode?.toString(10) || '',
      placeholder: 'Scancode...',
    },
    {
      label: "Location :",
      value: String(event.value.location),
      placeholder: 'Code...',
    },

    {
      label: "Modifiers :",
      value: [
        event.value.metaKey && 'Meta',
        event.value.shiftKey && 'Shift',
        event.value.ctrlKey && 'Ctrl',
        event.value.altKey && 'Alt',
      ]
        .filter(Boolean)
        .join(' + '),
      placeholder: 'None',
    },
  ];
});
</script>

<template>
  <div>
    <c-select
      v-model:value="layout"
      label="Keyboard Layout:"
      label-position="left"
      :options="layoutOptions"
      placeholder="Select keyboard layout"
      mb-2
    />
    <c-card mb-5 text-center important:py-12>
      <div v-if="event" mb-2 text-3xl>
        {{ event.key }}
      </div>
      <span lh-1 op-70>Press the key on your keyboard you want to get info about this key</span>
    </c-card>

    <n-input-group v-for="({ label, value, placeholder }, i) of fields" :key="i" style="margin-bottom: 5px">
      <n-input-group-label style="flex: 0 0 150px">
        {{ label }}
      </n-input-group-label>
      <InputCopyable :value="value" readonly :placeholder="placeholder" />
    </n-input-group>
  </div>
</template>
