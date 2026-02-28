import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'impacket-secretsdump',
  title: 'Impacket Secretsdump',
  description: 'A collection of impacket secretsdump resources and tools',
  keywords: ['impacket-secretsdump'],
  category: 'Hunting Commands',
  component: () => import('./impacket-secretsdump.vue'),
  icon: Terminal,
};


