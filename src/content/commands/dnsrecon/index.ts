import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'dnsrecon',
  title: 'Dnsrecon',
  description: 'A collection of dnsrecon resources and tools',
  keywords: ['dnsrecon'],
  category: 'Tool Commands',
  component: () => import('./dnsrecon.vue'),
  icon: Terminal,
};

