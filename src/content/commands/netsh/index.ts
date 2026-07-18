import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'netsh',
  title: 'Netsh',
  description: 'A collection of netsh resources and tools',
  keywords: ['netsh'],
  category: 'Network Commands',
  component: () => import('./netsh.vue'),
  icon: Terminal,
};

