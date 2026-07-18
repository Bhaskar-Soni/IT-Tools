import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'pylaps',
  title: 'Pylaps',
  description: 'A collection of pylaps resources and tools',
  keywords: ['pylaps'],
  category: 'Hunting Commands',
  component: () => import('./pylaps.vue'),
  icon: Terminal,
};


