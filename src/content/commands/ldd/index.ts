import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'ldd',
  title: 'Ldd',
  description: 'A collection of ldd resources and tools',
  keywords: ['ldd'],
  category: 'Linux Commands',
  component: () => import('./ldd.vue'),
  icon: Terminal,
};

