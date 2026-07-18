import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'netfirewall',
  title: 'Netfirewall',
  description: 'A collection of netfirewall resources and tools',
  keywords: ['netfirewall'],
  category: 'Network Commands',
  component: () => import('./netfirewall.vue'),
  icon: Terminal,
};

