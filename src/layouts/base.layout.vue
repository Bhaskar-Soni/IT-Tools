<script lang="ts" setup>
import { NIcon, useThemeVars } from 'naive-ui';
import { ChevronDown, ChevronRight } from '@vicons/tabler';

import { RouterLink, useRoute, useRouter } from 'vue-router';
import { Heart, Home2, Menu2, Book, Shield, Code, Layout, Hammer, Command, Link, FileText, Bell, Copy } from '@vicons/tabler';
import { watch, nextTick, computed } from 'vue';

import MenuLayout from '../components/MenuLayout.vue';
import TopHeader from '../components/TopHeader.vue';
import { useStyleStore } from '@/stores/style.store';
import { useToolStore } from '@/stores/tool.store';
import { contents, AVAILABLE_CONTENT_TYPES } from '@/core/content.loader';
import type { ContentType } from '@/core/content.types';
import { normalizeType, getEmojiForType } from '@/utils/normalizeType';
import { config } from '@/config';

const themeVars = useThemeVars();
const styleStore = useStyleStore();
const toolStore = useToolStore();
const route = useRoute();
const router = useRouter();
const version = config.app.version;
const commitSha = config.app.lastCommitSha.slice(0, 7);

const expandedCategories = computed(() => styleStore.expandedCategories);
const expandedCategoriesSet = computed(() => new Set(expandedCategories.value));

// Get icon for a content type with emoji fallback
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
  return getIconForType(type);
};

// Get display name for a content type
const getDisplayName = (type: string) => {
  const nameMap: Record<string, string> = {
    cheatsheet: 'Cheatsheets',
    policy: 'Policies',
    script: 'Scripts',
    template: 'Templates',
    command: 'Commands',
    link: 'Links',
    report: 'Reports',
    tool: 'Tools',
  };
  return nameMap[type] || type.charAt(0).toUpperCase() + type.slice(1) + 's';
};

// Check if current route matches a category page
const currentCategoryType = computed(() => {
  const pathSegments = route.path.split('/').filter(Boolean);
  if (pathSegments.length === 1) {
    const categoryPath = pathSegments[0];
    return normalizeType(categoryPath);
  }
  return null;
});

// Check if a category is expanded
const isCategoryExpanded = (name: string) => expandedCategoriesSet.value.has(name);

const toggleSubcategory = (subName: string, event?: Event) => {
  if (event) {
    event.stopPropagation();
  }
  const index = styleStore.expandedCategories.indexOf(subName);
  if (index > -1) {
    styleStore.expandedCategories.splice(index, 1);
  } else {
    styleStore.expandedCategories.push(subName);
  }
  // Trigger storage update
  styleStore.expandedCategories = [...styleStore.expandedCategories];
};

const toggleCategory = (categoryName: string, event?: Event) => {
  if (event) {
    event.stopPropagation();
  }
  const index = styleStore.expandedCategories.indexOf(categoryName);
  if (index > -1) {
    styleStore.expandedCategories.splice(index, 1);
  } else {
    styleStore.expandedCategories.push(categoryName);
  }
  // Trigger storage update
  styleStore.expandedCategories = [...styleStore.expandedCategories];
};

// Handle category link click - toggle if already on that category, otherwise just navigate
const handleCategoryLinkClick = (cat: string) => {
  const isAlreadyActive = currentCategoryType.value === cat;
  if (isAlreadyActive) {
    toggleCategory(cat);
  } else {
    // Navigate to the category using route name
    router.push({ name: 'dashboard', params: { type: cat } });
  }
};

// Get subcategories for each content type
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

// Track last auto-expanded category to avoid re-expanding when toggling
const lastAutoExpandedCategory = ref<string | null>(null);

// Scroll to active menu item when route changes
watch(
  () => route.path,
  async (newPath) => {
    const pathSegments = newPath.split('/').filter(Boolean);
    let categoryType = null;
    let itemSlug: string | null = null;
    
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
      await nextTick();

      if (itemSlug) {
        const item = contents.find(c => c.slug === itemSlug && c.type === categoryType);
        if (item && item.category) {
          const wasSubcategoryExpanded = styleStore.expandedCategories.includes(item.category);
          if (!wasSubcategoryExpanded) {
            styleStore.expandedCategories.push(item.category);
            await new Promise(resolve => setTimeout(resolve, 350));
          }
        }
      }
      
      // Find and scroll to the active element in the sidebar scrollable container
      // Try multiple selectors: router-link-active (Vue Router), is-active (custom), or current active item
      let activeItem = document.querySelector('.category-menu-item.router-link-active') ||
                       document.querySelector('.category-menu-item.is-active') ||
                       document.querySelector('.item-link.router-link-active') ||
                       document.querySelector('.item-link.is-active');
      
      if (activeItem) {
        // Wait a bit more for DOM to fully settle
        await new Promise(resolve => setTimeout(resolve, 150));

        if (activeItem instanceof HTMLElement) {
          activeItem.scrollIntoView({ block: 'center', inline: 'nearest', behavior: 'auto' });
          return;
        }
        
        // Walk up the DOM to find a scrollable parent
        let scrollableParent = activeItem.parentElement;
        while (scrollableParent) {
          const hasScroll = scrollableParent.scrollHeight > scrollableParent.clientHeight;
          if (hasScroll || scrollableParent.classList.contains('n-layout-sider')) {
            break;
          }
          scrollableParent = scrollableParent.parentElement;
        }
        
        if (scrollableParent) {
          // Calculate the position of the active item relative to the scrollable parent
          let elementPositionInParent = 0;
          let current: any = activeItem;
          
          while (current && current !== scrollableParent) {
            elementPositionInParent += current.offsetTop;
            current = current.offsetParent;
          }
          
          // Get dimensions
          const itemHeight = (activeItem as HTMLElement).offsetHeight || 40;
          const parentHeight = scrollableParent.clientHeight;
          const currentScroll = scrollableParent.scrollTop;
          
          // Calculate target scroll position to center the item
          const targetScroll = elementPositionInParent - (parentHeight / 2) + (itemHeight / 2);
          
          // Only scroll if the item is not already visible
          const itemVisibleTop = elementPositionInParent - currentScroll;
          const itemVisibleBottom = itemVisibleTop + itemHeight;
          
          if (itemVisibleTop < 0 || itemVisibleBottom > parentHeight) {
            scrollableParent.scrollTop = Math.max(0, Math.min(targetScroll, elementPositionInParent));
          }
        }
      }
    }
  }
);
</script>

<template>
  <div class="layout-with-fixed-header">
    <TopHeader />

    <MenuLayout class="menu-layout" :class="{ isSmallScreen: styleStore.isSmallScreen }">
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

          <!-- Expandable Categories (Dynamic from AVAILABLE_CONTENT_TYPES) -->
          <div v-for="cat of AVAILABLE_CONTENT_TYPES" :key="cat" class="expandable-category">
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
              <span>{{ getDisplayName(cat) }}</span>
              <NIcon 
                size="14" 
                :component="expandedCategoriesSet.has(cat) ? ChevronDown : ChevronRight"
                class="expand-icon"
                @click.stop="toggleCategory(cat, $event)"
              />
            </div>

            <!-- Expanded content for all categories -->
            <transition name="expand">
              <div v-if="expandedCategoriesSet.has(cat)" class="category-content">
                <div
                  v-for="subCategory in getSubcategoriesForType(cat as ContentType)"
                  :key="subCategory.name"
                  class="subcategory-item-group"
                >
                  <button
                    class="subcategory-header"
                    @click="toggleSubcategory(subCategory.name, $event)"
                  >
                    <NIcon size="14" :component="expandedCategoriesSet.has(subCategory.name) ? ChevronDown : ChevronRight" />
                    <span>{{ subCategory.name }}</span>
                  </button>
                  <transition name="expand">
                      <div v-if="expandedCategoriesSet.has(subCategory.name)" class="items-list">
                      <router-link
                        v-for="item in subCategory.items"
                        :key="item.slug"
                        :to="`/${item.type}/${item.slug}`"
                        class="item-link"
                        :class="{ 'is-active': route.params.id === item.slug }"
                      >
                        <NIcon v-if="item.icon" size="14" :component="item.icon" class="item-icon" />
                        {{ item.title }}
                      </router-link>
                    </div>
                  </transition>
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

<style lang="less" scoped>

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

.menu-layout {
  flex: 1;
  display: flex;
  height: calc(100vh - 64px);
  overflow: hidden;
}

.sidebar-brand {
  display: none;
}

.brand-logo {
  display: none;
}

.brand-text h1 {
  display: none;
}

.brand-text p {
  display: none;
}

.support-button {
  background: linear-gradient(135deg, #00d4ff 0%, #00ff88 100%) !important;
  color: #000 !important;
  transition: all ease 0.2s !important;
  font-weight: 600;

  &:hover {
    color: #000;
    padding-left: 30px;
    padding-right: 30px;
    box-shadow: 0 0 16px rgba(0, 212, 255, 0.5);
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

.tools-section {
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

.tool-category {
  margin-bottom: 5px;
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

.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease;
}

.layout-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.layout-wrapper {
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
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


