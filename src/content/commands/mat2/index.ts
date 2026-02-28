import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'mat2',
  title: 'Mat2',
  description: 'A collection of mat2 resources and tools',
  keywords: ['mat2'],
  category: 'Linux Commands',
  component: () => import('./mat2.vue'),
  icon: Terminal,
};

