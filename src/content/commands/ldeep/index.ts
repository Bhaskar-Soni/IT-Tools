import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'ldeep',
  title: 'Ldeep',
  description: 'A collection of ldeep resources and tools',
  keywords: ['ldeep'],
  category: 'Linux Commands',
  component: () => import('./ldeep.vue'),
  icon: Terminal,
};

