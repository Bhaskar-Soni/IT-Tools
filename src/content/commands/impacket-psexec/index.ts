import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'impacket-psexec',
  title: 'Impacket Psexec',
  description: 'A collection of impacket psexec resources and tools',
  keywords: ['impacket-psexec'],
  category: 'Hunting Commands',
  component: () => import('./impacket-psexec.vue'),
  icon: Terminal,
};


