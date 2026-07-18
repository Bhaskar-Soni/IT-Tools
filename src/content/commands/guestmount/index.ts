import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'guestmount',
  title: 'Guestmount',
  description: 'A collection of guestmount resources and tools',
  keywords: ['guestmount'],
  category: 'Tool Commands',
  component: () => import('./guestmount.vue'),
  icon: Terminal,
};

