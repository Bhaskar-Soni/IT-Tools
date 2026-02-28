import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'impacket-getuserspns',
  title: 'Impacket Getuserspns',
  description: 'A collection of impacket getuserspns resources and tools',
  keywords: ['impacket-getuserspns'],
  category: 'Hunting Commands',
  component: () => import('./impacket-getuserspns.vue'),
  icon: Terminal,
};


