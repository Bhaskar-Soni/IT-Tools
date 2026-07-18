<script setup lang="ts">


defineProps<{ font: { weight: string; style: string; fallback: string } }>();

const weightOptions = [
  { label: "Normal", value: 'normal' },
  { label: "Bold", value: 'bold' },
  { label: "Lighter", value: 'lighter' },
  { label: "100", value: '100' },
  { label: "400", value: '400' },
  { label: "700", value: '700' },
];

const styleOptions = [
  { label: "Normal", value: 'normal' },
  { label: "Italic", value: 'italic' },
  { label: "Oblique", value: 'oblique' },
];

const fallbackOptions = [
  { label: "Sans-serif", value: 'sans-serif' },
  { label: "Serif", value: 'serif' },
  { label: "Monospace", value: 'monospace' },
  { label: "Cursive", value: 'cursive' },
  { label: "Fantasy", value: 'fantasy' },
];
</script>

<!-- eslint-disable vue/no-mutating-props -->
<template>
  <n-space vertical>
    <c-select
      v-model:value="font.weight"
      label="Weight:"
      label-position="left"
      label-width="100px"
      :options="weightOptions"
      placeholder="Font Weight"
    />
    <c-select
      v-model:value="font.style"
      label="Style:"
      label-position="left"
      label-width="100px"
      :options="styleOptions"
      placeholder="Font Style"
    />
    <c-select
      v-model:value="font.fallback"
      label="Fallback:"
      label-width="100px"
      label-position="left"
      :options="fallbackOptions"
      placeholder="Fallback Font"
    />
  </n-space>
</template>
