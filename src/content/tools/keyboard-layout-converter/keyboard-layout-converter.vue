<script setup lang="ts">

import { ArrowRight } from '@vicons/tabler';
import layouts from '@langfreak/convert-layout';
import { useQueryParam, useQueryParamOrStorage } from '@/composable/queryParams';

// Layout options with keyword names
const layoutOptions = [
  { label: "Arabic (ar) – Arabic Keyboard", value: 'ar' },
  { label: "Belarusian (by) – Cyrillic QWERTY", value: 'by' },
  { label: "Colemak (colemak) – Colemak Layout", value: 'colemak' },
  { label: "Czech (cs) – QWERTZ", value: 'cs' },
  { label: "Dvorak (dvorak) – Dvorak Layout", value: 'dvorak' },
  { label: "English (en) – QWERTY", value: 'en' },
  { label: "French (fr) – AZERTY", value: 'fr' },
  { label: "German (de) – QWERTZ", value: 'de' },
  { label: "Greek (gr) – Greek Keyboard", value: 'gr' },
  { label: "Hebrew (he) – Hebrew Keyboard", value: 'he' },
  { label: "Italian (it) – QWERTY", value: 'it' },
  { label: "Kazakh (kk) – Cyrillic QWERTY", value: 'kk' },
  { label: "Korean (kr) – Hangul Keyboard", value: 'kr' },
  { label: "Persian (fa) – Persian Keyboard", value: 'fa' },
  { label: "Russian (ru) – Cyrillic JCUKEN", value: 'ru' },
  { label: "Spanish (es) – QWERTY (Spanish ISO)", value: 'es' },
  { label: "Swedish (sv) – QWERTY (Nordic)", value: 'sv' },
  { label: "Turkish (tr) – Turkish QWERTY (Q)", value: 'tr' },
  { label: "Ukrainian (uk) – Cyrillic JCUKEN", value: 'uk' },
];

const inputText = useQueryParam({ tool: 'keyboard-layout-conv', name: 'input', defaultValue: '' });
const sourceLayout = useQueryParamOrStorage({ name: 'from', storageName: 'keyboard-layout-conv:f', defaultValue: 'fr' });
const targetLayout = useQueryParamOrStorage({ name: 'to', storageName: 'keyboard-layout-conv:t', defaultValue: 'en' });

const defaultEn = {
  fromEn: (s: string) => s,
  toEn: (s: string) => s,
};

// Full conversion: source → English → target
const outputText = computed(() => {
  const src = layouts[sourceLayout.value] || defaultEn;
  const tgt = layouts[targetLayout.value] || defaultEn;
  const asEnglish = src.toEn(inputText.value || '');
  return tgt.fromEn(asEnglish);
});
</script>

<template>
  <NCard title="Keyboard Layout Converter">
    <NSpace vertical size="large">
      <NSpace align="center" justify="center">
        <NSelect
          v-model:value="sourceLayout"
          :options="layoutOptions"
          label-field="label"
          value-field="value"
          placeholder="Source layout"
          style="min-width: 200px;"
        />
        <NIcon size="20">
          <ArrowRight />
        </NIcon>
        <NSelect
          v-model:value="targetLayout"
          :options="layoutOptions"
          label-field="label"
          value-field="value"
          placeholder="Target layout"
          style="min-width: 200px;"
        />
      </NSpace>

      <c-input-text
        v-model:value="inputText"
        placeholder="Type here…"
        label="Input value:"
        multiline
      />

      <c-card title="Converted to target keyboard layout">
        <textarea-copyable
          :value="outputText"
          placeholder="Converted output"
          readonly
        />
      </c-card>
    </NSpace>
  </NCard>
</template>
