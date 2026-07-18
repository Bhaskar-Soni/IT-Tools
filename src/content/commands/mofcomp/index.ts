import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'mofcomp',
  title: 'Mofcomp',
  description: 'A collection of mofcomp resources and tools',
  keywords: ['mofcomp'],
  category: 'Tool Commands',
  component: () => import('./mofcomp.vue'),
  icon: Terminal,
};

