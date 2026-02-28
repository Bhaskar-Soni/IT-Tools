import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'lsof',
  title: 'Lsof',
  description: 'A collection of lsof resources and tools',
  keywords: ['lsof'],
  category: 'Linux Commands',
  component: () => import('./lsof.vue'),
  icon: Terminal,
};

