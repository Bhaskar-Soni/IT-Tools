import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'csc',
  title: 'Csc',
  description: 'A collection of csc resources and tools',
  keywords: ['csc'],
  category: 'Tool Commands',
  component: () => import('./csc.vue'),
  icon: Terminal,
};

