import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'dnstwist',
  title: 'Dnstwist',
  description: 'A collection of dnstwist resources and tools',
  keywords: ['dnstwist'],
  category: 'Tool Commands',
  component: () => import('./dnstwist.vue'),
  icon: Terminal,
};

