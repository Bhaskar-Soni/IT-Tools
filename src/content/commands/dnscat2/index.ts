import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'dnscat2',
  title: 'Dnscat2',
  description: 'A collection of dnscat2 resources and tools',
  keywords: ['dnscat2'],
  category: 'Network Commands',
  component: () => import('./dnscat2.vue'),
  icon: Terminal,
};


