import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'crunch',
  title: 'Crunch',
  description: 'A collection of crunch resources and tools',
  keywords: ['crunch'],
  category: 'Linux Commands',
  component: () => import('./crunch.vue'),
  icon: Terminal,
};

