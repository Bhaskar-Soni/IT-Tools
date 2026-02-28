import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'printbrm',
  title: 'Printbrm',
  description: 'A collection of printbrm resources and tools',
  keywords: ['printbrm'],
  category: 'Windows Commands',
  component: () => import('./printbrm.vue'),
  icon: Terminal,
};

