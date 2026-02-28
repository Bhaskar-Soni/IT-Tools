<template>
  <div class="global-search">
    <div class="search-input-wrapper">
      <c-input-text
        ref="inputRef"
        v-model:value="searchStore.searchQuery"
        :placeholder="searchPlaceholder"
        icon="search"
        @keydown.escape="searchStore.searchQuery = ''"
      />
    </div>

    <!-- Search Results/No Results Dropdown -->
    <div v-if="searchStore.searchQuery" class="search-results-dropdown">
      <!-- Results Found -->
      <template v-if="searchStore.searchResults.length > 0">
        <div class="results-header">
          <span class="results-count">{{ searchStore.searchResults.length }} results</span>
          <span v-if="!searchStore.isOnHome" class="results-scope">{{ searchStore.formatTypeName(searchStore.currentType || '') }}</span>
        </div>

        <router-link
          v-for="item in searchStore.searchResults"
          :key="`${item.type}-${item.slug}`"
          :to="`/${item.type}/${item.slug}`"
          class="result-item"
          @click="searchStore.searchQuery = ''"
        >
          <div class="result-item-content">
            <div class="result-with-icon">
              <n-icon v-if="item.icon" size="16" :component="item.icon" class="result-icon" />
              <div class="result-title">{{ item.title }}</div>
            </div>
            <div class="result-description">{{ item.description }}</div>
            <div class="result-type">{{ formatContentType(item.type) }}</div>
          </div>
        </router-link>
      </template>

      <!-- No Results Message -->
      <div v-else class="no-results">
        <p>No results found for "{{ searchStore.searchQuery }}"</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { NIcon } from 'naive-ui';
import { useSearchStore } from '@/stores/search.store';

const searchStore = useSearchStore();
const inputRef = ref();

const searchPlaceholder = computed(() => {
  if (searchStore.isOnHome) {
    return 'Search everything (Ctrl + K)...';
  }
  return `Search ${searchStore.formatTypeName(searchStore.currentType || '').toLowerCase()}... (Ctrl + K)`;
});

function formatContentType(type: string): string {
  const names: Record<string, string> = {
    tool: 'Tool',
    script: 'Script',
    cheatsheet: 'Cheatsheet',
    template: 'Template',
    policy: 'Policy',
    command: 'Command',
    link: 'Link',
    report: 'Report',
  };
  return names[type] || type;
}

// Handle Ctrl+K to focus the search input
onMounted(() => {
  const handleKeyDown = (event: KeyboardEvent) => {
    if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
      event.preventDefault();
      inputRef.value?.focus();
    }
  };

  window.addEventListener('keydown', handleKeyDown);

  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
});
</script>

<style scoped lang="less">
.global-search {
  position: relative;
  width: 100%;
  max-width: 800px;

  :deep(.c-input-text) {
    .input-wrapper {
      background-color: var(--bg-primary, #0d1117) !important;
      border: none !important;
      box-shadow: none !important;

      &:hover {
        background-color: var(--bg-primary, #0d1117) !important;
      }

      &:focus-within {
        background-color: rgba(88, 166, 255, 0.1) !important;
      }
    }

    .c-input-text__input,
    input {
      background-color: transparent !important;
      color: var(--text-primary, #c9d1d9) !important;

      &::placeholder {
        color: var(--text-secondary, #8b949e) !important;
      }
    }
  }
}

.search-input-wrapper {
  position: relative;
  width: 100%;
  overflow: visible;
}

/* Top-Left Corner */
.search-input-wrapper::before {
  content: '';
  position: absolute;
  top: -1px;
  left: -1px;
  width: 20px;
  height: 20px;
  border-top: 2px solid #30363d;
  border-left: 2px solid #30363d;
  pointer-events: none;
  transition: border-color 200ms ease;
  z-index: 11;
}

/* Top-Right Corner */
.search-input-wrapper::after {
  content: '';
  position: absolute;
  top: -1px;
  right: -1px;
  width: 20px;
  height: 20px;
  border-top: 2px solid #30363d;
  border-right: 2px solid #30363d;
  pointer-events: none;
  transition: border-color 200ms ease;
  z-index: 11;
}

.global-search:focus-within .search-input-wrapper::before,
.global-search:focus-within .search-input-wrapper::after {
  border-color: #58a6ff;
}

/* Bottom corners for search input wrapper */
.global-search::before {
  content: '';
  position: absolute;
  bottom: -1px;
  left: -1px;
  width: 20px;
  height: 20px;
  border-bottom: 2px solid #30363d;
  border-left: 2px solid #30363d;
  pointer-events: none;
  transition: border-color 200ms ease;
  z-index: 11;
}

.global-search::after {
  content: '';
  position: absolute;
  bottom: -1px;
  right: -1px;
  width: 20px;
  height: 20px;
  border-bottom: 2px solid #30363d;
  border-right: 2px solid #30363d;
  pointer-events: none;
  transition: border-color 200ms ease;
  z-index: 11;
}

.global-search:focus-within::before,
.global-search:focus-within::after {
  border-color: #58a6ff;
}

.search-results-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  background: var(--bg-secondary, #161b22);
  border: none;
  border-radius: 0;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
  max-height: 400px;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 1001;
  min-width: 100%;
}

.results-header {
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid var(--border-color, #30363d);
  background: var(--bg-tertiary, #21262d);
  font-size: 12px;
  font-weight: 600;
  color: var(--text-secondary, #8b949e);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.results-count {
  color: var(--text-primary, #c9d1d9);
}

.results-scope {
  background: var(--bg-secondary, #161b22);
  padding: 2px 6px;
  border-radius: 3px;
  color: var(--text-accent, #58a6ff);
}

.result-item {
  display: block;
  padding: 12px 16px;
  border-bottom: 1px solid var(--border-color, #30363d);
  text-decoration: none;
  transition: background-color 0.2s ease;
  color: inherit;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: var(--bg-tertiary, #21262d);
  }
}

.result-item-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.result-with-icon {
  display: flex;
  align-items: center;
  gap: 8px;
}

.result-icon {
  color: var(--text-accent, #58a6ff);
  flex-shrink: 0;
}

.result-title {
  font-weight: 600;
  color: var(--text-accent, #58a6ff);
  font-size: 14px;
}

.result-description {
  font-size: 12px;
  color: var(--text-secondary, #8b949e);
  line-height: 1.4;
  display: -webkit-box;
  line-clamp: 1;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.result-type {
  font-size: 11px;
  color: var(--text-secondary, #8b949e);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: 2px;
}

.no-results {
  padding: 16px;
  text-align: center;
  color: var(--text-secondary, #8b949e);
  font-size: 14px;
}
</style>
