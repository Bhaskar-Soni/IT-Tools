import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'lazagne',
  title: 'Lazagne',
  description: 'A collection of lazagne resources and tools',
  keywords: ['lazagne'],
  category: 'Tool Commands',
  component: () => import('./lazagne.vue'),
  icon: Terminal,
};

