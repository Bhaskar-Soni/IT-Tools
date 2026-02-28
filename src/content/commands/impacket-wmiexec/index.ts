import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'impacket-wmiexec',
  title: 'Impacket Wmiexec',
  description: 'A collection of impacket wmiexec resources and tools',
  keywords: ['impacket-wmiexec'],
  category: 'Hunting Commands',
  component: () => import('./impacket-wmiexec.vue'),
  icon: Terminal,
};


