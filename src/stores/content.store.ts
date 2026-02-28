import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { contents } from '@/core/content.loader';
import type { ContentItem, ContentType } from '@/core/content.types';

function makeKey(item: ContentItem) {
  return `${item.type}:${item.slug}`;
}

export const useContentStore = defineStore('content', () => {
  // âœ… all content from loader
  const all = ref<ContentItem[]>(contents);

  // âœ… favorites stored in localStorage
  const favorites = ref<Record<string, boolean>>(
    JSON.parse(localStorage.getItem('it-tools:favorites') || '{}'),
  );

  function toggleFavorite(item: ContentItem) {
    const key = makeKey(item);
    favorites.value[key] = !favorites.value[key];

    localStorage.setItem('it-tools:favorites', JSON.stringify(favorites.value));
  }

  function isFavorite(item: ContentItem) {
    return !!favorites.value[makeKey(item)];
  }

  const grouped = computed(() => {
    // Dynamically create map from available types
    const map: Record<ContentType, ContentItem[]> = {} as Record<ContentType, ContentItem[]>;

    // Get all unique types from loaded content
    const types = Array.from(new Set(all.value.map(item => item.type)));
    
    // Initialize each type with empty array
    for (const type of types) {
      map[type as ContentType] = [];
    }

    // Group items by type
    for (const item of all.value) {
      if (!map[item.type as ContentType]) {
        map[item.type as ContentType] = [];
      }
      map[item.type as ContentType].push(item);
    }

    return map;
  });

  // âœ… Used for sidebar + search
  function getPath(item: ContentItem) {
    return `/${item.type}/${item.slug}`;
  }

  return {
    all,
    grouped,
    favorites,
    toggleFavorite,
    isFavorite,
    getPath,
  };
});



