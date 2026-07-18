import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'archive',
  title: 'Archive',
  description: 'A collection of archive resources and tools',
  keywords: ['archive'],
  category: 'Windows Commands',
  component: () => import('./archive.vue'),
  icon: Terminal,
};

