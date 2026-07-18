import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'impacket-getst',
  title: 'Impacket Getst',
  description: 'A collection of impacket getst resources and tools',
  keywords: ['impacket-getst'],
  category: 'Hunting Commands',
  component: () => import('./impacket-getst.vue'),
  icon: Terminal,
};


