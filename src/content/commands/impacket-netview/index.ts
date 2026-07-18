import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'impacket-netview',
  title: 'Impacket Netview',
  description: 'A collection of impacket netview resources and tools',
  keywords: ['impacket-netview'],
  category: 'Hunting Commands',
  component: () => import('./impacket-netview.vue'),
  icon: Terminal,
};


