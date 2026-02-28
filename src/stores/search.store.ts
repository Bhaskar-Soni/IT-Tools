import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { contents } from '@/core/content.loader';
import type { ContentType, ContentItem } from '@/core/content.types';

export const useSearchStore = defineStore('search', () => {
  const route = useRoute();
  const searchQuery = ref('');

  // Normalize URL params to content types
  function normalizeType(urlType: string): ContentType | null {
    const typeMap: Record<string, ContentType> = {
      policies: 'policy',
      policy: 'policy',
      scripts: 'script',
      script: 'script',
      templates: 'template',
      template: 'template',
      cheatsheet: 'cheatsheet',
      cheatsheets: 'cheatsheet',
      tool: 'tool',
      tools: 'tool',
      command: 'command',
      commands: 'command',
      guide: 'guide',
      guides: 'guide',
      link: 'link',
      links: 'link',
      report: 'report',
      reports: 'report',
    };
    return typeMap[urlType] || null;
  }

  // Get current category type from route
  const currentType = computed(() => {
    const typeFromParams = normalizeType((route.params.type as string) || '');
    if (typeFromParams) return typeFromParams;
    
    if (route.meta.contentType) return route.meta.contentType as ContentType;
    
    return null;
  });

  // Format type name for display
  function formatTypeName(type: string): string {
    const names: Record<string, string> = {
      tool: 'Tools',
      script: 'Scripts',
      cheatsheet: 'Cheatsheets',
      template: 'Templates',
      policy: 'Policies',
      command: 'Commands',
      guide: 'Guides',
      link: 'Links',
      report: 'Reports',
    };
    return names[type] || type.charAt(0).toUpperCase() + type.slice(1).replace('-', ' ');
  }

  // Get search results based on current context
  const searchResults = computed(() => {
    const query = searchQuery.value.toLowerCase();
    if (!query) return [];

    let itemsToSearch = contents;

    // If on a specific category page, search only that type
    if (currentType.value) {
      itemsToSearch = contents.filter(item => item.type === currentType.value);
    }

    // Filter by search query
    return itemsToSearch.filter(item =>
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.keywords?.some(k => k.toLowerCase().includes(query))
    ) as ContentItem[];
  });

  // Check if we're on home page (no specific type)
  const isOnHome = computed(() => !currentType.value);

  return {
    searchQuery,
    searchResults,
    currentType,
    isOnHome,
    formatTypeName,
  };
});
