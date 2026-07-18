import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'impacket-addcomputer',
  title: 'Impacket Addcomputer',
  description: 'A collection of impacket addcomputer resources and tools',
  keywords: ['impacket-addcomputer'],
  category: 'Hunting Commands',
  component: () => import('./impacket-addcomputer.vue'),
  icon: Terminal,
};


