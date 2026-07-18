import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'impacket-smbexec',
  title: 'Impacket Smbexec',
  description: 'A collection of impacket smbexec resources and tools',
  keywords: ['impacket-smbexec'],
  category: 'Hunting Commands',
  component: () => import('./impacket-smbexec.vue'),
  icon: Terminal,
};


