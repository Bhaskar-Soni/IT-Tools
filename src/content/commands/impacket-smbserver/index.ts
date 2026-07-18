import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'impacket-smbserver',
  title: 'Impacket Smbserver',
  description: 'A collection of impacket smbserver resources and tools',
  keywords: ['impacket-smbserver'],
  category: 'Hunting Commands',
  component: () => import('./impacket-smbserver.vue'),
  icon: Terminal,
};


