import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'impacket-gettgt',
  title: 'Impacket Gettgt',
  description: 'A collection of impacket gettgt resources and tools',
  keywords: ['impacket-gettgt'],
  category: 'Hunting Commands',
  component: () => import('./impacket-gettgt.vue'),
  icon: Terminal,
};


