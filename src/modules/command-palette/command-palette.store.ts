import { defineStore } from 'pinia';
import _ from 'lodash';
import Fuse from 'fuse.js';
import type { PaletteOption } from './command-palette.types';
import { useToolStore } from '@/stores/tool.store';
import { useStyleStore } from '@/stores/style.store';
import { contents } from '@/core/content.loader';

import SunIcon from '~icons/mdi/white-balance-sunny';
import GithubIcon from '~icons/mdi/github';
import DiceIcon from '~icons/mdi/dice-5';
import InfoIcon from '~icons/mdi/information-outline';

export const useCommandPaletteStore = defineStore('command-palette', () => {
  const toolStore = useToolStore();
  const styleStore = useStyleStore();
  const router = useRouter();
  const route = useRoute();
  const searchPrompt = ref('');

  // Detect current content type from route (reactive)
  const currentContentType = computed(() => {
    const typeMap: Record<string, string> = {
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
    };

    const routeType = route.params.type as string | undefined;
    if (routeType && typeMap[routeType]) {
      return typeMap[routeType];
    }

    if (route.meta.contentType) {
      return route.meta.contentType as string;
    }

    // Check path
    const pathSegments = route.path.split('/').filter(Boolean);
    if (pathSegments.length > 0) {
      const possibleType = pathSegments[0];
      if (typeMap[possibleType]) {
        return typeMap[possibleType];
      }
    }

    return null;
  });

  const toolsOptions = toolStore.tools.map(tool => ({
    ...tool,
    to: tool.path,
    toolCategory: tool.category,
    category: 'Tools',
  }));

  // Map content items (scripts, policies, templates, cheatsheets) to palette options
  const contentOptions = contents
    .filter(item => item.type !== 'tool') // Exclude tools since we already have them
    .map(item => {
      const categoryMap: Record<string, string> = {
        script: 'Scripts',
        policy: 'Policies',
        template: 'Templates',
        cheatsheet: 'Cheatsheets',
      };
      
      return {
        name: item.title,
        description: item.description,
        to: `/${item.type}/${item.slug}`,
        category: categoryMap[item.type] || item.type,
        keywords: item.keywords || [],
        closeOnSelect: true,
        contentType: item.type,
      };
    });

  // Get filtered options based on current page
  const getFilteredSearchOptions = (): PaletteOption[] => {
    const type = currentContentType.value;
    const baseOptions = [
      {
        name: 'Toggle dark mode',
        description: 'Toggle dark mode on or off.',
        action: () => styleStore.toggleDark(),
        icon: SunIcon,
        category: 'Actions',
        keywords: ['dark', 'theme', 'toggle', 'mode', 'light', 'system'],
      },
      {
        name: 'Github repository',
        href: 'https://github.com/bhaskar-soni',
        category: 'External',
        description: 'View the IT-Tools repository on Github.',
        keywords: ['github', 'repo', 'repository', 'source', 'code'],
        icon: GithubIcon,
      },
      {
        name: 'About',
        description: 'Learn more about IT-Tools.',
        to: '/about',
        category: 'Pages',
        keywords: ['about', 'learn', 'more', 'info', 'information'],
        icon: InfoIcon,
      },
    ];

    // If on a specific category page, only show items from that category
    if (type === 'tool') {
      return [
        ...toolsOptions,
        {
          name: 'Random tool',
          description: 'Get a random tool from the list.',
          action: () => {
            const { path } = _.sample(toolStore.tools)!;
            router.push(path);
          },
          icon: DiceIcon,
          category: 'Tools',
          keywords: ['random', 'tool', 'pick', 'choose', 'select'],
          closeOnSelect: true,
        },
        ...baseOptions,
      ];
    } else if (type) {
      // Filter content items to only show current type
      const filteredContent = contentOptions.filter((item: any) => item.contentType === type);
      return [...filteredContent, ...baseOptions];
    }

    // On home or other pages, show everything
    return [
      ...toolsOptions,
      ...contentOptions,
      {
        name: 'Random tool',
        description: 'Get a random tool from the list.',
        action: () => {
          const { path } = _.sample(toolStore.tools)!;
          router.push(path);
        },
        icon: DiceIcon,
        category: 'Tools',
        keywords: ['random', 'tool', 'pick', 'choose', 'select'],
        closeOnSelect: true,
      },
      ...baseOptions,
    ];
  };

  const searchOptions = computed(() => getFilteredSearchOptions());

  // Recreate fuse index reactively based on current page
  const fuse = computed(() => {
    try {
      return new Fuse(searchOptions.value, {
        keys: [{ name: 'name', weight: 2 }, 'description', 'keywords', 'category'],
        threshold: 0.3,
      });
    } catch (e) {
      console.error('Fuse error:', e);
      return null;
    }
  });

  const searchResult = computed(() => {
    const query = searchPrompt.value;
    if (!query || !fuse.value) return [];
    try {
      return fuse.value.search(query).map(({ item }: any) => item);
    } catch (e) {
      console.error('Search error:', e);
      return [];
    }
  });

  const filteredSearchResult = computed(() => {
    if (!searchResult.value || searchResult.value.length === 0) return {};
    return _.chain(searchResult.value).groupBy('category').mapValues(categoryOptions => _.take(categoryOptions, 5)).value();
  });

  return {
    filteredSearchResult,
    searchPrompt,
  };
});


