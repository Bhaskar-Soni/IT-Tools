import { type MaybeRef, get, useStorage } from '@vueuse/core';
import { defineStore } from 'pinia';
import type { Ref } from 'vue';
import _ from 'lodash';
import type { Tool, ToolCategory, ToolWithCategory } from '@/core/tool.types';
import { toolsWithCategory } from '@/core/content.loader';

export const useToolStore = defineStore('tools', () => {
  const favoriteToolsName = useStorage('favoriteToolsName', []) as Ref<string[]>;

  const tools = computed<ToolWithCategory[]>(() => toolsWithCategory
    .map((tool: any) => {
      return ({
        ...tool,
        path: `/${tool.type}/${tool.slug}`,
        name: tool.title,
        description: tool.description,
        category: tool.category,
      });
    }));

  const toolsByCategory = computed<ToolCategory[]>(() => {
    return _.chain(tools.value)
      .groupBy('category')
      .map((components, name, path) => ({
        name,
        path,
        components: components
          .slice()
          .sort((a, b) => a.name.localeCompare(b.name)),
      }))
      .sortBy('name')
      .value();
  });

  const favoriteTools = computed(() => {
    return favoriteToolsName.value
      .map(favoriteName => tools.value.find(({ name, path }) => name === favoriteName || path === favoriteName))
      .filter(Boolean) as ToolWithCategory[];
  });

  return {
    tools,
    favoriteTools,
    favoriteToolsName,
    toolsByCategory,
    newTools: computed(() => tools.value.filter(({ isNew }) => isNew)),

    addToolToFavorites({ tool }: { tool: MaybeRef<Tool> }) {
      const toolPath = get(tool).path;
      if (toolPath) {
        favoriteToolsName.value.push(toolPath);
      }
    },

    removeToolFromFavorites({ tool }: { tool: MaybeRef<Tool> }) {
      const toolName = get(tool).name;
      const toolPath = get(tool).path;
      favoriteToolsName.value = favoriteToolsName.value.filter(name => toolName !== name && toolPath !== name);
    },

    isToolFavorite({ tool }: { tool: MaybeRef<Tool> }) {
      const toolName = get(tool).name;
      const toolPath = get(tool).path;
      return favoriteToolsName.value.includes(toolName) || favoriteToolsName.value.includes(toolPath);
    },

    updateFavoriteTools(newOrder: ToolWithCategory[]) {
      favoriteToolsName.value = newOrder.map(tool => tool.path);
    },
  };
});
