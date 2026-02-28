import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'holehe',
  title: 'Holehe',
  description: 'A collection of holehe resources and tools',
  keywords: ['holehe'],
  category: 'Tool Commands',
  component: () => import('./holehe.vue'),
  icon: Terminal,
};

