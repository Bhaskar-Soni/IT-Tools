<script setup lang="ts">
import { useRouter, useRoute, RouterLink } from 'vue-router';
import { computed, ref, watch, onMounted, nextTick } from 'vue';
import { contents, AVAILABLE_CONTENT_TYPES } from '@/core/content.loader';
import type { ContentType } from '@/core/content.types';
import { normalizeType, formatTypeName, getEmojiForType } from '@/utils/normalizeType';
import { useThemeVars } from 'naive-ui';
import TopHeader from '../components/TopHeader.vue';
import MenuLayout from '../components/MenuLayout.vue';
import NavbarButtons from '../components/NavbarButtons.vue';
import { useStyleStore } from '@/stores/style.store';
import { useToolStore } from '@/stores/tool.store';
import { NIcon } from 'naive-ui';
import { Menu2, Home2, ChevronDown, ChevronRight, Book, Shield, Code, Layout, Hammer, Command, Link, FileText, Bell, Copy } from '@vicons/tabler';

const router = useRouter();
const route = useRoute();
const styleStore = useStyleStore();
const toolStore = useToolStore();
const themeVars = useThemeVars();

// Use expandedCategories from store
const expandedCategories = computed(() => styleStore.expandedCategories);
const expandedCategoriesSet = computed(() => new Set(expandedCategories.value));

const sortedToolCategories = computed(() => {
  return toolStore.toolsByCategory
    .map(cat => ({
      ...cat,
      components: cat.components
        .slice()
        .sort((a, b) => a.name.localeCompare(b.name, 'en', { sensitivity: 'base' })),
    }))
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name, 'en', { sensitivity: 'base' }));
});

// Check if current route matches a category page
const currentCategoryType = computed(() => {
  const pathSegments = route.path.split('/').filter(Boolean);
  if (pathSegments.length >= 1) {
    const categoryPath = pathSegments[0];
    return normalizeType(categoryPath) || categoryPath;
  }
  if (route.meta.contentType) {
    return route.meta.contentType as string;
  }
  return null;
});

// Check if a category is expanded
const isCategoryExpanded = (name: string) => expandedCategoriesSet.value.has(name);

// Ensure current category is expanded when on a category listing page
onMounted(() => {
  // Add the current category to expanded list if viewing a category page
  const pathSegments = route.path.split('/').filter(Boolean);
  if (pathSegments.length === 1) {
    const categoryType = pathSegments[0];
    const normalizedType = normalizeType(categoryType) || (categoryType as ContentType);
    if (normalizedType && !styleStore.expandedCategories.includes(normalizedType)) {
      styleStore.expandedCategories.push(normalizedType);
    }
  }
});

// Auto-expand category and subcategory when viewing a detail page
watch(
  () => route.path,
  (newPath) => {
    const pathSegments = newPath.split('/').filter(Boolean);
    
    // Check if we're on a detail page (/:type/:slug)
    if (pathSegments.length >= 2) {
      const contentType = pathSegments[0];
      const slug = pathSegments[1];
      
      // Normalize URL type to content type
      const normalizedType = normalizeType(contentType);
      
      if (normalizedType) {
        // Expand the main category type
        if (!styleStore.expandedCategories.includes(normalizedType)) {
          styleStore.expandedCategories.push(normalizedType);
        }
        
        // Find the item and expand its subcategory
        const item = contents.find(c => {
          return c.slug === slug && c.type === normalizedType;
        });
        
        if (item && item.category) {
          if (!styleStore.expandedCategories.includes(item.category)) {
            styleStore.expandedCategories.push(item.category);
          }
        }
      }
    }
  },
);

// Get all unique content types
const categories = computed(() => {
  const typesMap = new Map<ContentType, number>();
  
  contents.forEach(item => {
    if (!typesMap.has(item.type)) {
      typesMap.set(item.type, 0);
    }
    typesMap.set(item.type, (typesMap.get(item.type) || 0) + 1);
  });

  return Array.from(typesMap.entries()).map(([type, count]) => ({
    type,
    count,
    name: formatTypeName(type),
  })).sort((a, b) => b.count - a.count);
});

// Get current category type from route
// This works for both category routes (/:type) and individual item routes (/:type/:slug)
const currentType = computed(() => {
  // Try to get from route params first (for category routes like /tool)
  let type = normalizeType((route.params.type as string) || '');
  
  // If not found, try to get from route meta (for individual item routes like /tool/email-header-analyzer)
  if (!type && route.meta.contentType) {
    type = route.meta.contentType as ContentType;
  }
  
  // If still not found, try to extract from route path
  if (!type) {
    const pathSegments = route.path.split('/').filter(Boolean);
    if (pathSegments.length > 0) {
      type = normalizeType(pathSegments[0]);
    }
  }
  
  return type || null;
});

// Get subcategories with items for any content type (sorted by subcategory and item title)
const getSubcategoriesForType = (type: ContentType) => {
  const typeItems = contents.filter(item => item.type === type);
  const categoryMap = new Map<string, typeof typeItems>();

  typeItems.forEach(item => {
    const category = item.category || 'Uncategorized';
    if (!categoryMap.has(category)) {
      categoryMap.set(category, []);
    }
    categoryMap.get(category)!.push(item);
  });

  return Array.from(categoryMap.entries()).map(([name, items]) => ({
    name,
    items: items.sort((a, b) => a.title.localeCompare(b.title, 'en', { sensitivity: 'base' })),
  })).sort((a, b) => a.name.localeCompare(b.name, 'en', { sensitivity: 'base' }));
};

// Keep current type helper for pages that consume the current category list
const subcategoriesWithItems = computed(() => {
  if (!currentType.value) return [];
  return getSubcategoriesForType(currentType.value);
});
  

// Toggle subcategory expansion
function toggleSubcategory(name: string, event?: Event) {
  if (event) {
    event.stopPropagation();
  }
  const index = styleStore.expandedCategories.indexOf(name);
  if (index > -1) {
    styleStore.expandedCategories.splice(index, 1);
  } else {
    styleStore.expandedCategories.push(name);
  }
  // Trigger storage update
  styleStore.expandedCategories = [...styleStore.expandedCategories];
}

// Toggle category expansion
function toggleCategoryExpansion(type: string, event?: Event) {
  if (event) {
    event.stopPropagation();
  }
  const index = styleStore.expandedCategories.indexOf(type);
  if (index > -1) {
    styleStore.expandedCategories.splice(index, 1);
  } else {
    styleStore.expandedCategories.push(type);
  }
  // Trigger storage update
  styleStore.expandedCategories = [...styleStore.expandedCategories];
}

// Handle category link click - toggle if already on that category, otherwise just navigate
function handleCategoryLinkClick(cat: string) {
  const isAlreadyActive = currentCategoryType.value === cat;
  if (isAlreadyActive) {
    toggleCategoryExpansion(cat);
  } else {
    // Navigate to the category using route name
    router.push({ name: 'dashboard', params: { type: cat } });
  }
}

// Note: formatTypeName is imported from '@/utils/normalizeType' at the top

// Get icon for a content type, with emoji fallback
const getIconForType = (type: string) => {
  const iconMap: Record<string, any> = {
    cheatsheet: Book,
    policy: Shield,
    script: Code,
    template: Layout,
    command: Command,
    link: Link,
    report: FileText,
    tool: Hammer,
    guide: Book,
    news: Bell,
    note: FileText,
    snippet: Copy,
  };
  
  if (iconMap[type]) {
    return iconMap[type];
  }
  
  // For unknown types, assign a consistent icon based on hash
  const availableIcons = [Book, Code, Hammer, FileText, Bell, Copy, Link, Layout, Shield, Command];
  let hash = 0;
  for (let i = 0; i < type.length; i++) {
    hash = ((hash << 5) - hash) + type.charCodeAt(i);
  }
  const index = Math.abs(hash) % availableIcons.length;
  return availableIcons[index];
};

const getIconOrEmoji = (type: string) => {
  const icon = getIconForType(type);
  return icon || getEmojiForType(type);
};

// Navigate to category
function goToCategory(type: ContentType) {
  router.push({ name: 'dashboard', params: { type } });
}

// Navigate to item
function goToItem(type: ContentType, slug: string) {
  router.push(`/${type}/${slug}`);
}

// Track last auto-expanded category to avoid re-expanding when toggling
const lastAutoExpandedCategory = ref<string | null>(null);

// Scroll to active menu item when route changes
async function handleSidebarAutoExpand(newPath: string) {
    const pathSegments = newPath.split('/').filter(Boolean);
    let categoryType = null;
    let itemSlug = null;
    
    // For category pages (/:type)
    if (pathSegments.length === 1) {
      const categoryPath = pathSegments[0];
      categoryType = normalizeType(categoryPath) || categoryPath;
    }
    // For item pages (/:type/:slug)
    else if (pathSegments.length >= 2) {
      const itemTypePath = pathSegments[0];
      categoryType = normalizeType(itemTypePath) || itemTypePath;
      itemSlug = pathSegments[1];
    }
    
    // Expand the category if needed
    if (categoryType) {
      const wasExpanded = styleStore.expandedCategories.includes(categoryType);
      if (!wasExpanded) {
        styleStore.expandedCategories.push(categoryType);
        // Wait longer for expand animation and DOM updates
        await new Promise(resolve => setTimeout(resolve, 400));
      } else {
        await nextTick();
      }
      
      lastAutoExpandedCategory.value = categoryType;
      
      // For item pages, we also need to expand the subcategory
      if (itemSlug) {
        if (categoryType === 'tool') {
          const toolMatch = toolStore.toolsByCategory
            .flatMap(cat => cat.components.map(tool => ({ category: cat.name, tool })))
            .find(entry => entry.tool.slug === itemSlug || entry.tool.path.endsWith(`/${itemSlug}`));

          if (toolMatch && toolMatch.category) {
            const wasSubcategoryExpanded = styleStore.expandedCategories.includes(toolMatch.category);
            if (!wasSubcategoryExpanded) {
              styleStore.expandedCategories.push(toolMatch.category);
              await new Promise(resolve => setTimeout(resolve, 350));
            }
          }
        } else {
          const item = contents.find(c => c.slug === itemSlug && c.type === categoryType);
          if (item && item.category) {
            const wasSubcategoryExpanded = styleStore.expandedCategories.includes(item.category);
            if (!wasSubcategoryExpanded) {
              styleStore.expandedCategories.push(item.category);
              await new Promise(resolve => setTimeout(resolve, 350));
            }
          }
        }
      }
      
      // Wait for all DOM updates and Vue Router to apply active classes
      await nextTick();
      await new Promise(resolve => setTimeout(resolve, 200));
      
      // Find the active item - try multiple strategies
      let activeItem = null;
      
      // Strategy 1: Look for router-link-active class
      activeItem = document.querySelector('.item-link.router-link-active') ||
                   document.querySelector('.item-link.is-active') ||
                   document.querySelector('.category-menu-item.router-link-active') ||
                   document.querySelector('.category-menu-item.is-active');
      
      // Strategy 2: If not found, find the link by matching href with current path
      if (!activeItem && itemSlug) {
        const targetPath = `/${categoryType}/${itemSlug}`;
        activeItem = document.querySelector(`a[href="${targetPath}"]`);
      }
      
      if (activeItem) {
        // Wait a bit more for DOM to fully settle
        await new Promise(resolve => setTimeout(resolve, 100));

        if (activeItem instanceof HTMLElement) {
          activeItem.scrollIntoView({ block: 'center', inline: 'nearest', behavior: 'auto' });
          return;
        }
        
        // Find the scrollable parent - look specifically for n-layout-sider first
        let scrollableParent = document.querySelector('.n-layout-sider');
        
        // If not found, walk up from the active item
        if (!scrollableParent) {
          scrollableParent = activeItem.parentElement;
          while (scrollableParent) {
            const hasScroll = scrollableParent.scrollHeight > scrollableParent.clientHeight;
            if (hasScroll) {
              break;
            }
            scrollableParent = scrollableParent.parentElement;
          }
        }
        
        if (scrollableParent) {
          // Calculate the position of the active item relative to the scrollable parent
          const itemRect = activeItem.getBoundingClientRect();
          const parentRect = scrollableParent.getBoundingClientRect();
          
          // Calculate item position relative to scrollable parent
          const itemPosRelativeToParent = itemRect.top - parentRect.top + scrollableParent.scrollTop;
          
          // Get dimensions
          const itemHeight = itemRect.height || 40;
          const parentHeight = scrollableParent.clientHeight;
          const currentScroll = scrollableParent.scrollTop;
          
          // Calculate target scroll: center the item in the visible area
          const targetScroll = itemPosRelativeToParent - (parentHeight / 2) + (itemHeight / 2);
          
          // Add padding to ensure item is not at the very edge
          const padding = 30;
          
          // Check if the item is currently visible in the parent
          const itemVisibleTop = itemPosRelativeToParent - currentScroll;
          const itemVisibleBottom = itemVisibleTop + itemHeight;
          const isVisible = itemVisibleTop >= 0 && itemVisibleBottom <= parentHeight;
          
          // Scroll to bring the item into view if it's not visible
          if (!isVisible) {
            scrollableParent.scrollTop = Math.max(0, targetScroll - padding);
          }
        }
      }
    }
}

watch(
  () => route.path,
  (newPath) => {
    handleSidebarAutoExpand(newPath);
  },
  { immediate: true },
);

watch(
  () => toolStore.toolsByCategory.length,
  () => {
    handleSidebarAutoExpand(route.path);
  },
  { immediate: true },
);

</script>

<template>
  <div class="layout-with-fixed-header">
    <TopHeader />

    <MenuLayout class="menu-layout">
      <template #sider>
      <div class="sider-content">
        <div v-if="styleStore.isSmallScreen" flex flex-col items-center>

          <div flex justify-center>
            <NavbarButtons />
          </div>
        </div>

        <!-- Main Categories Menu (expandable) -->
        <div class="main-categories-menu">
          <!-- Home (non-expandable) -->
          <div class="home-menu-wrapper">
            <router-link to="/" class="category-menu-item">
              <NIcon size="18" :component="Home2" />
              <span>Home</span>
            </router-link>
          </div>

          <!-- Expandable Categories (Cheatsheets, Policies, Scripts, Templates, Tools, Commands, Links, Reports) -->
          <div 
            v-for="cat of AVAILABLE_CONTENT_TYPES" 
            v-show="contents.some(c => c.type === cat)"
            :key="cat" 
            class="expandable-category"
          >
            <div
              class="category-menu-item"
              :class="{ 'is-active': currentCategoryType === cat, 'is-expanded': expandedCategoriesSet.has(cat) }"
              @click="handleCategoryLinkClick(cat)"
              role="button"
              tabindex="0"
            >
              <NIcon 
                size="18" 
                :component="getIconForType(cat)"
              />
              <span>{{ formatTypeName(cat) }}</span>
              <NIcon 
                size="14" 
                :component="expandedCategoriesSet.has(cat) ? ChevronDown : ChevronRight"
                class="expand-icon"
                @click.stop="toggleCategoryExpansion(cat, $event)"
              />
            </div>

            <!-- Expanded content for this category -->
            <transition name="expand">
              <div v-if="expandedCategoriesSet.has(cat)" class="category-content">
                <!-- Subcategories for this type -->
                <div v-if="cat !== 'tool'">
                  <div
                    v-for="subcategory in getSubcategoriesForType(cat as ContentType)"
                    :key="subcategory.name"
                    class="subcategory-item-group"
                  >
                    <div
                      class="subcategory-header"
                      @click="toggleSubcategory(subcategory.name, $event)"
                    >
                      <NIcon size="14" :component="expandedCategoriesSet.has(subcategory.name) ? ChevronDown : ChevronRight" />
                      <span>{{ subcategory.name }}</span>
                    </div>
                    <transition name="expand">
                      <div v-if="expandedCategoriesSet.has(subcategory.name)" class="items-list">
                        <router-link
                          v-for="item in subcategory.items"
                          :key="item.slug"
                          :to="`/${item.type}/${item.slug}`"
                          class="item-link"
                        >
                          <NIcon v-if="item.icon" size="14" :component="item.icon" class="item-icon" />
                          {{ item.title }}
                        </router-link>
                      </div>
                    </transition>
                  </div>
                </div>

                <!-- Tool categories (only for Tools) -->
                <div v-if="cat === 'tool'">
                  <div
                  v-for="toolCategory in sortedToolCategories"
                    :key="toolCategory.name"
                    class="subcategory-item-group"
                  >
                    <button
                      class="subcategory-header"
                      @click="toggleSubcategory(toolCategory.name, $event)"
                    >
                      <NIcon size="14" :component="expandedCategoriesSet.has(toolCategory.name) ? ChevronDown : ChevronRight" />
                      <span>{{ toolCategory.name }}</span>
                    </button>
                    <transition name="expand">
                      <div v-if="expandedCategoriesSet.has(toolCategory.name)" class="items-list">
                        <router-link
                          v-for="tool in toolCategory.components"
                          :key="tool.slug"
                          :to="tool.path"
                          class="item-link"
                        >
                          <NIcon v-if="tool.icon" size="14" :component="tool.icon" class="item-icon" />
                          {{ tool.name }}
                        </router-link>
                      </div>
                    </transition>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>

        <div class="footer">
          <div>
            IT-Tools
          </div>
          <div>
            Â© {{ new Date().getFullYear() }}
            <c-link target="_blank" rel="noopener" href="https://youngstercompany.com/?utm_source=IT-Tools">
              Powered by YC
            </c-link>
          </div>
        </div>
      </div>
    </template>

    <template #content>
      <div class="layout-wrapper">
        <div class="layout-content">
          <div class="content-padding">
            <slot />
          </div>
        </div>
      </div>
    </template>
  </MenuLayout>
  </div>
</template>

<style scoped lang="less">

/* IT-Tools Refined Color Variables */
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

.layout-with-fixed-header {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  padding-top: 64px;
  background-color: var(--bg-primary);
}

.layout-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.layout-content {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: var(--bg-primary);
  padding: 26px;
  /* Custom scrollbar styling */
  scrollbar-width: thin;
  scrollbar-color: #30363d #0d1117;
}

.layout-content::-webkit-scrollbar {
  width: 8px;
}

.layout-content::-webkit-scrollbar-track {
  background: #0d1117;
}

.layout-content::-webkit-scrollbar-thumb {
  background: #30363d;
  border-radius: 4px;
}

.layout-content::-webkit-scrollbar-thumb:hover {
  background: #58a6ff;
  box-shadow: 0 0 10px rgba(88, 166, 255, 0.3);
}

.content-padding {
  padding: 0;
}

.sider-content {
  padding-top: 40px;
  padding-bottom: 90px;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #0a0d12;
  overflow-y: auto;
  overflow-x: hidden;
  
  > .main-categories-menu {
    flex-shrink: 0;
    flex-grow: 0;
  }
}

.main-categories-menu {
  margin-top: 0;
  margin-bottom: 30px;
  padding: 0 15px;
  flex-shrink: 0;
  
  .menu-title {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 10px;
    color: var(--text-primary);
    text-transform: uppercase;
    letter-spacing: 1px;
  }
}

.subcategories-menu {
  margin-bottom: 30px;
  padding: 0 15px;
  
  .menu-title {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 10px;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 1px;
  }
}

.category-menu-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  margin-bottom: 0;
  color: var(--text-secondary);
  text-decoration: none;
  border-radius: 0;
  transition: all 0.3s ease;
  border: none;
  background: none;
  font-family: inherit;
  text-align: left;
  cursor: pointer;
  position: relative;
  
  /* Top-Left Corner - hidden by default */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 12px;
    height: 12px;
    border-top: 2px solid transparent;
    border-left: 2px solid transparent;
    transition: border-color 0.3s ease;
    pointer-events: none;
  }

  /* Top-Right Corner - hidden by default */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 12px;
    height: 12px;
    border-top: 2px solid transparent;
    border-right: 2px solid transparent;
    transition: border-color 0.3s ease;
    pointer-events: none;
  }
  
  &:hover {
    background-color: var(--bg-tertiary);
    color: var(--text-accent);
  }
  
  &.router-link-active,
  &.is-active,
  &.is-expanded {
    background-color: var(--bg-tertiary);
    color: var(--text-accent);
    
    &::before,
    &::after {
      border-color: var(--text-accent);
    }
  }

  .expand-icon {
    margin-left: auto;
  }
}

.expandable-category {
  position: relative;
  margin-bottom: 10px;
  padding-bottom: 2px;
  overflow: visible;

  /* Bottom-Left Corner - hidden by default */
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 12px;
    height: 12px;
    border-bottom: 2px solid transparent;
    border-left: 2px solid transparent;
    transition: border-color 0.3s ease;
    pointer-events: none;
    z-index: 5;
  }

  /* Bottom-Right Corner - hidden by default */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 12px;
    height: 12px;
    border-bottom: 2px solid transparent;
    border-right: 2px solid transparent;
    transition: border-color 0.3s ease;
    pointer-events: none;
    z-index: 5;
  }

  &:has(.category-menu-item.is-active)::before,
  &:has(.category-menu-item.is-active)::after,
  &:has(.category-menu-item.is-expanded)::before,
  &:has(.category-menu-item.is-expanded)::after {
    border-color: var(--text-accent);
  }
}

.home-menu-wrapper {
  position: relative;
  margin-bottom: 10px;
  padding-bottom: 2px;
  overflow: visible;

  /* Bottom-Left Corner - hidden by default */
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 12px;
    height: 12px;
    border-bottom: 2px solid transparent;
    border-left: 2px solid transparent;
    transition: border-color 0.3s ease;
    pointer-events: none;
    z-index: 5;
  }

  /* Bottom-Right Corner - hidden by default */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 12px;
    height: 12px;
    border-bottom: 2px solid transparent;
    border-right: 2px solid transparent;
    transition: border-color 0.3s ease;
    pointer-events: none;
    z-index: 5;
  }

  &:has(.category-menu-item.router-link-active)::before,
  &:has(.category-menu-item.router-link-active)::after {
    border-color: var(--text-accent);
  }
}

.expandable-category {
  margin-bottom: 5px;
}

.category-content {
  margin-left: 12px;
  margin-top: 5px;
  padding-left: 12px;
  border-left: 2px solid var(--border-color);
}

.subcategory-item-group {
  margin-bottom: 8px;
}

.subcategory-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  cursor: pointer;
  color: var(--text-secondary);
  border-radius: 4px;
  transition: all 0.2s ease;
  background: none;
  border: none;
  font-family: inherit;
  font-size: 13px;
  text-align: left;
  width: 100%;
  
  &:hover {
    background-color: var(--bg-tertiary);
    color: var(--text-accent);
  }
}

.items-list {
  margin-left: 16px;
  margin-top: 3px;
}

.item-icon {
  margin-right: 6px;
  vertical-align: middle;
}

.item-link {
  display: flex;
  align-items: center;
  padding: 5px 8px;
  margin-bottom: 2px;
  color: var(--text-secondary);
  text-decoration: none;
  border-radius: 4px;
  font-size: 12px;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: var(--bg-tertiary);
    color: var(--text-accent);
  }
  
  &.router-link-active,
  &.is-active {
    background-color: var(--bg-tertiary);
    color: var(--text-accent);
    font-weight: 500;
  }
}



.footer {
  text-align: center;
  color: var(--text-secondary);
  padding: 15px;
  background: var(--bg-secondary);
  border-top: 1px solid var(--border-color);
  font-size: 12px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: var(--sidebar-width, 250px);
  z-index: 100;

  :deep(.c-link) {
    color: #3b82f6 !important;

    &:hover {
      color: #60a5fa !important;
    }

    &:active {
      color: #3b82f6 !important;
    }

    &:focus {
      color: #3b82f6 !important;
    }
  }
}

.hero-wrapper {
  position: absolute;
  display: block;
  left: 0;
  width: 100%;
  z-index: 10;
  overflow: hidden;

  .gradient {
    margin-top: -65px;
  }

  .text-wrapper {
    position: absolute;
    left: 0;
    width: 100%;
    text-align: center;
    top: 16px;
    color: #fff;

    .title {
      font-size: 25px;
      font-weight: 600;
    }

    .divider {
      width: 50px;
      height: 2px;
      border-radius: 4px;
      background-color: var(--text-accent);
      margin: 0 auto 5px;
    }

    .subtitle {
      font-size: 16px;
    }
  }
}

.expand-enter-active,
.expand-leave-active {
  transition: max-height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  max-height: 0 !important;
}

.expand-enter-to,
.expand-leave-from {
  opacity: 1;
  max-height: 5000px;
}

.emoji-icon {
  font-size: 18px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #58a6ff;
  filter: drop-shadow(0 0 2px rgba(88, 166, 255, 0.3));
}
</style>





