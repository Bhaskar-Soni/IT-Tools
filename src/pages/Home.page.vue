<script setup lang="ts">
import { useHead } from '@vueuse/head';
import { useRouter } from 'vue-router';
import { computed } from 'vue';
import { contents } from '@/core/content.loader';
import type { ContentType } from '@/core/content.types';
import { Heart, Home2, Menu2, Book, Shield, Code, Layout, Hammer, Command, Link, FileText, Bell, Copy } from '@vicons/tabler';
import { getEmojiForType } from '@/utils/normalizeType';

useHead({ title: 'IT-Tools - The Hidden Side of the Internet' });

const router = useRouter();

// Icon mapping with emoji fallback for any content type
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

// Get all unique content types
const contentCategories = computed(() => {
  const typesMap = new Map<ContentType, { count: number; icon?: any; description: string }>();
  
  contents.forEach(item => {
    if (!typesMap.has(item.type)) {
      typesMap.set(item.type, {
        count: 0,
        icon: getIconOrEmoji(item.type),
        description: getDescriptionForType(item.type),
      });
    }
    const current = typesMap.get(item.type)!;
    current.count += 1;
  });

  return Array.from(typesMap.entries()).map(([type, data]) => ({
    type,
    ...data,
  })).sort((a, b) => formatTypeName(a.type).localeCompare(formatTypeName(b.type)));
});

// Get description for each type
function getDescriptionForType(type: ContentType): string {
  const descriptions: Record<string, string> = {
    tool: 'Explore all available tools and utilities',
    script: 'Browse useful scripts and code snippets',
    cheatsheet: 'Quick reference guides and cheat sheets',
    template: 'Ready-to-use templates and formats',
    policy: 'Important policies and guidelines',
    command: 'Terminal and CLI commands at your fingertips',
    link: 'Curated resources and useful links',
    report: 'Analysis reports and documentation',    guide: 'Guides and tutorials',
    snippet: 'Code snippets and examples',
  };
  return descriptions[type as string] || `Browse ${type}s`;
}

// Format type name for display
function formatTypeName(type: string): string {
  const names: Record<string, string> = {
    tool: 'Tools',
    script: 'Scripts',
    cheatsheet: 'Cheatsheets',
    template: 'Templates',
    policy: 'Policies',
    command: 'Commands',
    link: 'Links',
    report: 'Reports',    guide: 'Guides',
    snippet: 'Snippets',
  };
  return names[type] || type.charAt(0).toUpperCase() + type.slice(1).replace('-', ' ') + 's';
}

// Navigate to category
function goToCategory(type: ContentType) {
  router.push({ name: 'dashboard', params: { type } });
}
</script>

<template>
  <div class="home-container">
    <div class="hero-section">
      <h1 class="hero-title">Welcome to IT-Tools</h1>
      <p class="hero-subtitle">The Hidden Side of the Internet</p>
      <p class="hero-description">Explore tools, scripts, templates, and more to enhance your productivity</p>
    </div>

    <div class="categories-section">
      <h2 class="section-title">Browse by Category</h2>
      
      <div class="categories-grid">
        <!-- Category Cards -->
        <div
          v-for="category in contentCategories"
          :key="category.type"
          class="category-card"
          @click="goToCategory(category.type)"
        >
          <div class="card-border">
            <div class="card-header">
              <div class="card-icon">
                <n-icon size="48" :component="getIconForType(category.type)" />
              </div>
              <h3 class="card-title">{{ formatTypeName(category.type) }}</h3>
            </div>
            <div class="card-body">
              <p class="card-count">{{ category.count }} items</p>
              <p class="card-description">{{ category.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.home-container {
  width: 100%;
  padding: 40px 20px;
  background: var(--color-background);
}

.hero-section {
  text-align: center;
  margin-bottom: 60px;
  padding: 40px 20px;

  .hero-title {
    font-size: 48px;
    font-weight: 700;
    margin: 0 0 16px 0;
    color: var(--color-text);
  }

  .hero-subtitle {
    font-size: 24px;
    font-weight: 500;
    margin: 0 0 16px 0;
    color: var(--color-text-secondary);
  }

  .hero-description {
    font-size: 16px;
    margin: 0;
    color: var(--color-text-tertiary);
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 768px) {
    padding: 20px;

    .hero-title {
      font-size: 32px;
    }

    .hero-subtitle {
      font-size: 18px;
    }

    .hero-description {
      font-size: 14px;
    }
  }
}

.categories-section {
  max-width: 1400px;
  margin: 0 auto;

  .section-title {
    font-size: 28px;
    font-weight: 600;
    margin: 0 0 32px 0;
    text-align: center;
    color: var(--color-text);
  }
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 16px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
}

.category-card {
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
}

.card-border {
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #161b22;
  transition: all 200ms ease;
  overflow: visible;
  position: relative;
  padding: 0;
}

/* Top-Left Corner */
.card-border::before {
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
.card-border::after {
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

.card-header {
  position: relative;
  padding: 20px;
  background-color: transparent;
  border-bottom: 1px solid #30363d;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.card-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  color: #58a6ff;
}

.icon-placeholder {
  font-size: 40px;
}

.emoji-icon {
  font-size: 48px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #58a6ff;
  filter: drop-shadow(0 0 3px rgba(88, 166, 255, 0.4));
}

.emoji-icon-large {
  font-size: 48px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #58a6ff;
  filter: drop-shadow(0 0 3px rgba(88, 166, 255, 0.4));
}

.card-title {
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  color: #c9d1d9;
  text-align: center;
}

.card-body {
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 8px;
}

/* Bottom-Left Corner */
.card-body::before {
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
.card-body::after {
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

.category-card:hover .card-border::before,
.category-card:hover .card-border::after,
.category-card:hover .card-body::before,
.category-card:hover .card-body::after {
  border-color: #58a6ff;
}

.category-card:hover .card-header {
  border-bottom-color: #58a6ff;
}

.category-card:hover .card-border {
  background-color: #21262d;
}

.card-count {
  font-size: 13px;
  font-weight: 500;
  margin: 0;
  color: #8b949e;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.card-description {
  font-size: 14px;
  margin: 0;
  color: #8b949e;
  line-height: 1.5;
}
</style>


