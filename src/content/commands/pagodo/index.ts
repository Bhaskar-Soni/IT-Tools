import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'pagodo',
  title: 'Pagodo',
  description: 'A collection of pagodo resources and tools',
  keywords: ['pagodo'],
  category: 'Linux Commands',
  component: () => import('./pagodo.vue'),
  icon: Terminal,
};

