import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'impacket-getnpusers',
  title: 'Impacket Getnpusers',
  description: 'A collection of impacket getnpusers resources and tools',
  keywords: ['impacket-getnpusers'],
  category: 'Hunting Commands',
  component: () => import('./impacket-getnpusers.vue'),
  icon: Terminal,
};


