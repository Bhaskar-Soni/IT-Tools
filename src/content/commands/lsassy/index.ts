import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'lsassy',
  title: 'Lsassy',
  description: 'A collection of lsassy resources and tools',
  keywords: ['lsassy'],
  category: 'Hunting Commands',
  component: () => import('./lsassy.vue'),
  icon: Terminal,
};


