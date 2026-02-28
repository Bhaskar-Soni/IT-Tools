import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'impacket-dcomexec',
  title: 'Impacket Dcomexec',
  description: 'A collection of impacket dcomexec resources and tools',
  keywords: ['impacket-dcomexec'],
  category: 'Hunting Commands',
  component: () => import('./impacket-dcomexec.vue'),
  icon: Terminal,
};


