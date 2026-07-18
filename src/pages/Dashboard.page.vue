<script setup lang="ts">
import { useHead } from '@vueuse/head';
import { useRoute, useRouter } from 'vue-router';
import { computed } from 'vue';
import { contents, AVAILABLE_CONTENT_TYPES } from '@/core/content.loader';
import type { ContentType, ContentItem } from '@/core/content.types';
import { normalizeType, formatTypeName } from '@/utils/normalizeType';
import { useSearchStore } from '@/stores/search.store';
import { useToolStore } from '@/stores/tool.store';
import FavoriteButton from '@/components/FavoriteButton.vue';
import { NIcon } from 'naive-ui';

const route = useRoute();
const router = useRouter();
const searchStore = useSearchStore();
const toolStore = useToolStore();

// Normalize URL params to content types
// Falls back to first available type if normalized type is not found
const selectedType = computed((): ContentType => {
  const urlType = (route.params.type as string) || '';
  const normalized = normalizeType(urlType);
  
  // If we have a normalized type, use it
  if (normalized) return normalized;
  
  // If urlType is provided but couldn't be normalized, still try to use it as-is
  // (it might be a custom type)
  if (urlType && contents.some(item => item.type === urlType)) {
    return urlType as ContentType;
  }
  
  // Fall back to first available type or 'tool' if nothing else
  return (AVAILABLE_CONTENT_TYPES && AVAILABLE_CONTENT_TYPES.length > 0) 
    ? AVAILABLE_CONTENT_TYPES[0] 
    : ('tool' as ContentType);
});

useHead(() => ({
  title: `IT-Tools - ${formatTypeName(selectedType.value)}`,
}));

// Get all items for this category
const categoryItems = computed(() => {
  return contents.filter(item => item.type === selectedType.value) as ContentItem[];
});

// Use search store for filtered results
const filteredItems = computed(() => {
  if (!searchStore.searchQuery) return categoryItems.value;
  return searchStore.searchResults;
});

// Get favorite items from this category
const favoriteItems = computed(() => {
  try {
    // For tools, use toolStore.favoriteTools directly - it's already computed!
    if (selectedType.value === 'tool') {
      return (toolStore.favoriteTools || []) as unknown as ContentItem[];
    }
    
    // For other types, use favoriteToolsName which stores paths like "/script/slug"
    let favoriteNames: string[] = [];
    if (toolStore.favoriteToolsName && typeof toolStore.favoriteToolsName === 'object' && 'value' in toolStore.favoriteToolsName) {
      favoriteNames = toolStore.favoriteToolsName.value as string[];
    } else if (Array.isArray(toolStore.favoriteToolsName)) {
      favoriteNames = toolStore.favoriteToolsName as string[];
    }
    
    if (!Array.isArray(favoriteNames) || favoriteNames.length === 0) {
      return [];
    }

    return categoryItems.value.filter(item => {
      const itemPath = `/${item.type}/${item.slug}`;
      return favoriteNames.includes(itemPath);
    }) as ContentItem[];
  } catch (e) {
    return [];
  }
});

// Get items to display in main grid (including favorites)
const mainGridItems = computed(() => {
  return filteredItems.value;
});

// Format type name for display
// This is now imported from utils, so we can remove the local function

// Navigate to category
function goToCategory(type: ContentType) {
  router.push({ name: 'dashboard', params: { type } });
}

// Get description for content type
function getTypeDescription(type: ContentType): string {
  const descriptions: Record<ContentType, string> = {
    script: 'Reusable scripts and automation tools for various tasks',
    tool: 'Practical utilities and tools for daily use',
    template: 'Ready-to-use templates and boilerplates',
    link: 'Curated collection of useful links and resources',
    command: 'Command reference and quick command lookups',
    cheatsheet: 'Quick reference guides and cheat sheets',
    guide: 'Detailed guides and tutorials',
    policy: 'Policies, standards, and best practices',
    report: 'Reports, analysis, and documentation',
    note: 'Quick notes and reminders',
    snippet: 'Code snippets and examples',
  };
  return descriptions[type] || 'Browse available items';
}
</script>

<template>
  <div class="dashboard-container">
    <div class="dashboard-header">
      <h1 class="dashboard-title">{{ formatTypeName(selectedType) }}</h1>
      <p class="dashboard-description">{{ getTypeDescription(selectedType) }}</p>
      <p class="dashboard-count">{{ categoryItems.length }} items available</p>
    </div>

    <!-- Favorite Items Section -->
    <div v-if="favoriteItems.length > 0" class="favorites-section">
      <h2 class="section-title">Your favorite {{ formatTypeName(selectedType).toLowerCase() }}</h2>
      <div class="favorites-grid">
        <div
          v-for="item in favoriteItems"
          :key="item.slug"
          class="content-card"
        >
          <div class="card-top">
            <div class="card-header">
              <n-icon v-if="item.icon" :component="item.icon" size="40" />
              <span v-else class="card-icon-placeholder">ðŸ“„</span>
            </div>
            <div class="favorite-btn" @click.stop>
              <FavoriteButton :tool="{ ...item, name: item.title, path: `/${item.type}/${item.slug}`, isNew: false } as any" />
            </div>
          </div>
          <router-link :to="`/${item.type}/${item.slug}`" class="card-link">
            <h3 class="card-title">{{ item.title }}</h3>
            <p class="card-description">{{ item.description }}</p>
          </router-link>
        </div>
      </div>
    </div>

    <!-- All Items Section -->
    <div class="all-items-section">
      <h2 class="section-title">All {{ formatTypeName(selectedType).toLowerCase() }}</h2>
    </div>
    
    <!-- Content Grid -->
    <div class="content-grid">
      <div
        v-for="item in (mainGridItems as ContentItem[])"
        :key="item.slug"
        class="content-card"
      >
        <div class="card-top">
          <div class="card-header">
            <n-icon v-if="item.icon" :component="item.icon" size="40" />
            <span v-else class="card-icon-placeholder">ðŸ“„</span>
          </div>
          <div class="favorite-btn" @click.stop>
            <FavoriteButton :tool="{ ...item, name: item.title, path: `/${item.type}/${item.slug}`, isNew: false } as any" />
          </div>
        </div>
        <router-link :to="`/${item.type}/${item.slug}`" class="card-link">
          <h3 class="card-title">{{ item.title }}</h3>
          <p class="card-description">{{ item.description }}</p>
        </router-link>
      </div>
    </div>

    <!-- Empty State -->
    <div v-if="filteredItems.length === 0" class="empty-state">
      <p v-if="searchStore.searchQuery">No items found matching your search</p>
      <p v-else>No items available in this category</p>
    </div>
  </div>
</template>

<style scoped lang="less">
.dashboard-container {
  width: 100%;
  padding: 0;
}

.dashboard-header {
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--color-border);
  text-align: center;

  .dashboard-title {
    font-size: 32px;
    font-weight: 700;
    margin: 0 0 8px 0;
    text-transform: capitalize;
    color: var(--color-text);
  }

  .dashboard-description {
    margin: 0 0 8px 0;
    color: var(--color-text-secondary);
    font-size: 14px;
  }

  .dashboard-count {
    margin: 0;
    color: var(--color-text-secondary);
    font-size: 14px;
  }
}

.favorites-section {
  margin-bottom: 48px;
}

.favorites-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 48px;

  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.all-items-section {
  margin-bottom: 24px;
}

.section-title {
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 24px 0;
  color: var(--color-text);
}

.content-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 40px;

  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.content-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  text-decoration: none;
  color: var(--color-text);
  background: #161b22;
  transition: all 0.3s ease;
  cursor: pointer;
  overflow: visible;
}

/* Top-Left Corner */
.content-card::before {
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
.content-card::after {
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

.content-card:hover::before,
.content-card:hover::after {
  border-color: #58a6ff;
}

.content-card:hover {
  background-color: #21262d;
}

.card-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px 24px 0 24px;
  margin-bottom: 0;
  gap: 12px;
  border-bottom: 1px solid #30363d;
  padding-bottom: 20px;
  transition: border-color 200ms ease;

  .content-card:hover & {
    border-bottom-color: #58a6ff;
  }
}

.card-link {
  display: flex;
  flex-direction: column;
  flex: 1;
  text-decoration: none;
  color: inherit;
  padding: 20px 24px 24px 24px;
  position: relative;
}

/* Bottom-Left Corner */
.card-link::before {
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

/* Bottom-Right Corner */
.card-link::after {
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

.content-card:hover .card-link::before,
.content-card:hover .card-link::after {
  border-color: #58a6ff;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 0;
  background: transparent;
  flex-shrink: 0;

  :deep(.n-icon) {
    color: #58a6ff;
  }
}

.favorite-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  opacity: 0.7;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }

  :deep(.n-icon) {
    color: #58a6ff;
  }
}

.card-icon-placeholder {
  font-size: 28px;
}

.card-title {
  font-size: 15px;
  font-weight: 600;
  margin: 0 0 8px 0;
  line-height: 1.4;
  color: #c9d1d9;
}

.card-description {
  font-size: 12px;
  color: #8b949e;
  margin: 0;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.empty-state {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  color: var(--color-text-secondary);
  font-size: 16px;

  p {
    margin: 0;
  }
}
</style>


