import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'impacket-golden-ticket-inner-realm',
  title: 'Impacket Golden Ticket Inner Realm',
  description: 'A collection of impacket golden ticket inner realm resources and tools',
  keywords: ['impacket-golden-ticket-inner-realm'],
  category: 'Hunting Commands',
  component: () => import('./impacket-golden-ticket-inner-realm.vue'),
  icon: Terminal,
};


