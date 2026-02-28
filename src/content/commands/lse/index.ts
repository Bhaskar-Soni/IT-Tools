import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'lse',
  title: 'Lse',
  description: 'A collection of lse resources and tools',
  keywords: ['lse'],
  category: 'Linux Commands',
  component: () => import('./lse.vue'),
  icon: Terminal,
};

