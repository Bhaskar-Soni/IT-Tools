<script lang="ts" setup>
import { useTheme } from './c-alert.theme';

const props = withDefaults(defineProps<{ type?: 'warning'; title?: string }>(), { type: 'warning', title: undefined });
const { type, title } = toRefs(props);

const theme = useTheme();
const variantTheme = computed(() => theme.value?.[type.value]);
const variantThemeSafe = computed(() => variantTheme.value ?? { backgroundColor: 'transparent', textColor: 'inherit', icon: undefined });
</script>

<template>
  <div class="c-alert" flex items-center b-rd-4px pa-5>
    <div class="c-alert--icon" mr-4 text-40px op-60>
      <slot name="icon">
        <component :is="variantThemeSafe.icon" />
      </slot>
    </div>

    <div class="c-alert--content">
      <div v-if="title" class="c-alert--title" text-15px fw-600>
        {{ title }}
      </div>
      <slot />
    </div>
  </div>
</template>

<style lang="less" scoped>
.c-alert {
  background-color: v-bind('variantThemeSafe.backgroundColor');
  color: v-bind('variantThemeSafe.textColor');
  font-size: inherit;
  line-height: 20px;
}
</style>
