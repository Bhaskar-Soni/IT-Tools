import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'tr',
  title: 'Tr',
  description: 'A collection of tr resources and tools',
  keywords: ['tr'],
  category: 'Cloud Commands',
  component: () => import('./tr.vue'),
  icon: Terminal,
};

