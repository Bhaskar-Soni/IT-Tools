<script setup lang="ts">
import { NIcon } from 'naive-ui';
import { Menu2, Search } from '@vicons/tabler';
import { useStyleStore } from '@/stores/style.store';
import NavbarButtons from './NavbarButtons.vue';
import GlobalSearch from './GlobalSearch.vue';

const styleStore = useStyleStore();

const toggleSidebar = () => {
  styleStore.isMenuCollapsed = !styleStore.isMenuCollapsed;
};
</script>

<template>
  <header class="it-tools-top-header">
    <!-- Left Section: Hamburger + Logo + Title -->
    <div class="header-left">
      <button class="hamburger-btn" @click="toggleSidebar" :aria-label="'Toggle sidebar'">
        <NIcon size="24" :component="Menu2" />
      </button>

      <div class="logo-section">
        <div class="logo-box">
          <span>IT</span>
        </div>
        <div class="header-title">
          <h1>IT-Tools</h1>
          <p>The Hidden Side of the Internet</p>
        </div>
      </div>
    </div>

    <!-- Center Section: Global Search -->
    <div class="header-center">
      <GlobalSearch />
    </div>

    <!-- Right Section: Social Icons -->
    <div class="header-right">
      <NavbarButtons />
    </div>
  </header>
</template>

<style lang="less" scoped>
.it-tools-top-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 0 24px;
  background-color: var(--bg-secondary);
  border-bottom: 1px solid var(--border-color);
  height: 64px;
  box-sizing: border-box;
  flex-shrink: 0;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
  min-width: fit-content;
}

.hamburger-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  color: var(--text-primary);
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--bg-tertiary);
    color: var(--text-accent);
  }
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: fit-content;
}

.logo-box {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #58a6ff, #ffd700);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  flex-shrink: 0;
}

.header-title {
  display: flex;
  flex-direction: column;
  gap: 2px;

  h1 {
    font-size: 14px;
    font-weight: 700;
    margin: 0;
    letter-spacing: 1px;
    color: var(--text-primary);
    white-space: nowrap;
  }

  p {
    font-size: 10px;
    color: var(--text-secondary);
    margin: 0;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }
}

.header-center {
  flex: 1;
  max-width: 900px;
  margin: 0 24px;
  display: flex;
  justify-content: flex-end;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .it-tools-top-header {
    padding: 0 16px;
    gap: 12px;
  }

  .header-center {
    max-width: 400px;
    margin: 0 12px;
  }

  .header-title p {
    display: none;
  }
}

@media (max-width: 480px) {
  .header-title {
    display: none;
  }

  .header-center {
    display: none;
  }
}
</style>



