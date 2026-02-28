import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'fish',
  title: 'Fish',
  description: 'A collection of fish resources and tools',
  keywords: ['fish'],
  category: 'Linux Commands',
  component: () => import('./fish.vue'),
  icon: Terminal,
};

