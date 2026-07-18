<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router';
import { NMessageProvider, NNotificationProvider, darkTheme } from 'naive-ui';
import { darkThemeOverrides, lightThemeOverrides } from './themes';
import { layouts } from './layouts';
import { useStyleStore } from './stores/style.store';

const route = useRoute();
const layout = computed(() => route?.meta?.layout ?? layouts.base);
const styleStore = useStyleStore();

const theme = computed(() => (styleStore.isDarkTheme ? darkTheme : null));
const themeOverrides = computed(() => (styleStore.isDarkTheme ? darkThemeOverrides : lightThemeOverrides));
</script>

<template>
  <n-config-provider :theme="theme" :theme-overrides="themeOverrides">
    <NMessageProvider placement="bottom">
      <NNotificationProvider placement="bottom-right">
        <KeepAlive>
          <component :is="layout">
            <RouterView />
          </component>
        </KeepAlive>
      </NNotificationProvider>
    </NMessageProvider>
  </n-config-provider>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Saira:wght@400;500;600;700&display=swap');

/* CSS Variables from IT-Tools Refined */
:root {
  --bg-primary: #0d1117;
  --bg-secondary: #161b22;
  --bg-tertiary: #21262d;
  --border-color: #30363d;
  --border-color-active: #58a6ff;
  --text-primary: #c9d1d9;
  --text-secondary: #8b949e;
  --text-accent: #58a6ff;
  --accent-cyan: #00d4ff;
  --accent-green: #00ff88;
  --accent-yellow: #ffd700;
}

html, body, #app {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-family: 'Saira', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif;
  font-weight: 500;
}

body {
  margin: 0;
  padding: 0;
  background-color: var(--bg-primary);
}

* {
  box-sizing: border-box;
}

/* IT-Tools Refined Theme - Apply to all Naive UI components */

:deep(.n-layout) {
  background-color: var(--bg-primary) !important;
}

:deep(.n-layout-sider) {
  background-color: #0a0d12 !important;
  border-right: 1px solid var(--border-color) !important;
}

:deep(.n-layout-content) {
  background-color: var(--bg-primary) !important;
}

:deep(.n-menu) {
  background-color: transparent !important;
}

:deep(.n-menu-item) {
  color: var(--text-secondary) !important;
  background-color: transparent !important;
  border-radius: 6px !important;
  margin: 4px 12px !important;
  padding: 10px 12px !important;
}

:deep(.n-menu-item:hover) {
  background-color: var(--bg-tertiary) !important;
  color: var(--text-accent) !important;
}

:deep(.n-menu-item--selected) {
  background-color: var(--bg-tertiary) !important;
  color: var(--text-accent) !important;
}

:deep(.n-menu-item--selected::before) {
  background-color: transparent !important;
}

:deep(.n-menu-item-content) {
  color: inherit !important;
}

:deep(.n-menu-item-content-icon) {
  color: inherit !important;
}

:deep(.n-menu-divider) {
  background-color: var(--border-color) !important;
}

:deep(.n-submenu) {
  background-color: transparent !important;
}

:deep(.n-submenu-children) {
  background-color: transparent !important;
}

:deep(.n-input) {
  background-color: var(--bg-primary) !important;
  border-color: var(--border-color) !important;
  color: var(--text-primary) !important;
}

:deep(.n-input:focus) {
  border-color: var(--border-color-active) !important;
  box-shadow: 0 0 0 3px rgba(88, 166, 255, 0.1) !important;
}

:deep(.n-input--focus) {
  border-color: var(--border-color-active) !important;
  box-shadow: 0 0 0 3px rgba(88, 166, 255, 0.1) !important;
}

:deep(.n-input-wrapper) {
  background-color: var(--bg-primary) !important;
}

:deep(.n-input::placeholder) {
  color: var(--text-secondary) !important;
}

:deep(.n-button) {
  background-color: var(--bg-tertiary) !important;
  color: var(--text-primary) !important;
  border-color: var(--border-color) !important;
  transition: all 150ms ease !important;
}

:deep(.n-button:hover) {
  background-color: var(--border-color) !important;
  color: var(--text-accent) !important;
  border-color: var(--border-color-active) !important;
}

:deep(.n-button--primary) {
  background-color: var(--text-accent) !important;
  color: var(--bg-primary) !important;
  border-color: var(--text-accent) !important;
}

:deep(.n-button--primary:hover) {
  background-color: #79c0ff !important;
  border-color: #79c0ff !important;
}

:deep(.n-card) {
  background-color: var(--bg-secondary) !important;
  border-color: var(--border-color) !important;
}

:deep(.n-card__content) {
  background-color: var(--bg-secondary) !important;
}

:deep(.n-scrollbar) {
  background-color: var(--bg-primary) !important;
}

:deep(.n-scrollbar-rail) {
  background-color: var(--bg-primary) !important;
}

:deep(.n-scrollbar-thumb) {
  background-color: var(--border-color) !important;
}

:deep(.n-scrollbar-thumb:hover) {
  background-color: var(--border-color-active) !important;
}

:deep(.n-dialog) {
  background-color: var(--bg-secondary) !important;
}

:deep(.n-dialog__title) {
  color: var(--text-primary) !important;
}

:deep(.n-drawer) {
  background-color: var(--bg-secondary) !important;
}

:deep(.n-drawer__header) {
  border-bottom-color: var(--border-color) !important;
}

:deep(.n-select) {
  background-color: var(--bg-primary) !important;
  border-color: var(--border-color) !important;
}

:deep(.n-select:hover) {
  border-color: var(--border-color-active) !important;
}

:deep(.n-tag) {
  background-color: var(--bg-tertiary) !important;
  color: var(--text-primary) !important;
  border-color: var(--border-color) !important;
}

:deep(.n-pagination) {
  background-color: transparent !important;
}

:deep(.n-pagination-item) {
  background-color: var(--bg-tertiary) !important;
  color: var(--text-primary) !important;
  border-color: var(--border-color) !important;
}

:deep(.n-pagination-item:hover) {
  background-color: var(--border-color) !important;
  color: var(--text-accent) !important;
}

:deep(.n-pagination-item--active) {
  background-color: var(--text-accent) !important;
  color: var(--bg-primary) !important;
}

:deep(.n-table) {
  background-color: var(--bg-secondary) !important;
  color: var(--text-primary) !important;
}

:deep(.n-data-table-td) {
  border-bottom-color: var(--border-color) !important;
  background-color: var(--bg-secondary) !important;
}

:deep(.n-data-table-tr:hover) {
  background-color: var(--bg-tertiary) !important;
}

:deep(.n-data-table-thead) {
  background-color: var(--bg-tertiary) !important;
}

:deep(.n-data-table-th) {
  background-color: var(--bg-tertiary) !important;
  color: var(--text-primary) !important;
  border-bottom-color: var(--border-color) !important;
}

/* Scrollbar styling */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--bg-primary);
}

::-webkit-scrollbar-thumb {
  background: var(--border-color);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--border-color-active);
  box-shadow: 0 0 8px rgba(88, 166, 255, 0.3);
}
</style>


