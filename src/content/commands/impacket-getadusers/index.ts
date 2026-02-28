import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'impacket-getadusers',
  title: 'Impacket Getadusers',
  description: 'A collection of impacket getadusers resources and tools',
  keywords: ['impacket-getadusers'],
  category: 'Hunting Commands',
  component: () => import('./impacket-getadusers.vue'),
  icon: Terminal,
};


