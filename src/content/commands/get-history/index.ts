import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'get-history',
  title: 'Get History',
  description: 'A collection of get history resources and tools',
  keywords: ['get-history'],
  category: 'Windows Commands',
  component: () => import('./get-history.vue'),
  icon: Terminal,
};

