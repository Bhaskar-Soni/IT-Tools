import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'dnsreaper',
  title: 'Dnsreaper',
  description: 'A collection of dnsreaper resources and tools',
  keywords: ['dnsreaper'],
  category: 'Tool Commands',
  component: () => import('./dnsreaper.vue'),
  icon: Terminal,
};

