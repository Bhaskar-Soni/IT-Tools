import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'set',
  title: 'Set',
  description: 'A collection of set resources and tools',
  keywords: ['set'],
  category: 'Hunting Commands',
  component: () => import('./set.vue'),
  icon: Terminal,
};

