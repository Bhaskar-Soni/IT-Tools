<script setup lang="ts">
import { useStyleStore } from '@/stores/style.store';
import { toRefs, computed } from 'vue';

const styleStore = useStyleStore();
const { isMenuCollapsed, isSmallScreen } = toRefs(styleStore);
const siderPosition = computed(() => (isSmallScreen.value ? 'absolute' : 'static'));
</script>

<template>
  <n-layout has-sider>
    <n-layout-sider
      bordered
      :width="240"
      :show-trigger="false"
      :native-scrollbar="false"
      :position="siderPosition"
      :style="{ display: isMenuCollapsed ? 'none' : 'block' }"
    >
      <slot name="sider" />
    </n-layout-sider>
    <n-layout class="content">
      <slot name="content" />
      <div v-show="isSmallScreen && !isMenuCollapsed" class="overlay" @click="isMenuCollapsed = true" />
    </n-layout>
  </n-layout>
</template>

<style lang="less" scoped>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000080;
  cursor: pointer;
}

.n-layout {
  height: calc(100vh - 64px);
  --sidebar-width: 240px;
  background-color: #0d1117;
  overflow: hidden !important;
}

:deep(.n-layout-sider) {
  background-color: #0a0d12 !important;
  border-right: 1px solid #30363d !important;
  overflow: hidden !important;
  z-index: 999;
  
  .n-layout-scroll-container {
    scroll-behavior: auto !important;
    scroll-padding-top: 0 !important;
  }
}

.content {
  background-color: #0d1117;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden !important;
  flex: 1;
  ::v-deep(.n-layout-scroll-container) {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 0;
    background-color: #0d1117;
    overflow: hidden !important;
  }
}
</style>
