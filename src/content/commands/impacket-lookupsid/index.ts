import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'impacket-lookupsid',
  title: 'Impacket Lookupsid',
  description: 'A collection of impacket lookupsid resources and tools',
  keywords: ['impacket-lookupsid'],
  category: 'Hunting Commands',
  component: () => import('./impacket-lookupsid.vue'),
  icon: Terminal,
};


