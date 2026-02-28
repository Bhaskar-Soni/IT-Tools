import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'gitfive',
  title: 'Gitfive',
  description: 'A collection of gitfive resources and tools',
  keywords: ['gitfive'],
  category: 'Tool Commands',
  component: () => import('./gitfive.vue'),
  icon: Terminal,
};

