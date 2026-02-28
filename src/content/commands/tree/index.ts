import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'tree',
  title: 'Tree',
  description: 'A collection of tree resources and tools',
  keywords: ['tree'],
  category: 'Windows Commands',
  component: () => import('./tree.vue'),
  icon: Terminal,
};

