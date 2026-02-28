import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'tcpdump',
  title: 'Tcpdump',
  description: 'A collection of tcpdump resources and tools',
  keywords: ['tcpdump'],
  category: 'Linux Commands',
  component: () => import('./tcpdump.vue'),
  icon: Terminal,
};

