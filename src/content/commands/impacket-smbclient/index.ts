import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'impacket-smbclient',
  title: 'Impacket Smbclient',
  description: 'A collection of impacket smbclient resources and tools',
  keywords: ['impacket-smbclient'],
  category: 'Hunting Commands',
  component: () => import('./impacket-smbclient.vue'),
  icon: Terminal,
};


