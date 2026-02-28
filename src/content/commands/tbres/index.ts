import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'tbres',
  title: 'Tbres',
  description: 'A collection of tbres resources and tools',
  keywords: ['tbres'],
  category: 'Tool Commands',
  component: () => import('./tbres.vue'),
  icon: Terminal,
};

