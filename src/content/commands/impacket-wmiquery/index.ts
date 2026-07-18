import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'impacket-wmiquery',
  title: 'Impacket Wmiquery',
  description: 'A collection of impacket wmiquery resources and tools',
  keywords: ['impacket-wmiquery'],
  category: 'Hunting Commands',
  component: () => import('./impacket-wmiquery.vue'),
  icon: Terminal,
};


