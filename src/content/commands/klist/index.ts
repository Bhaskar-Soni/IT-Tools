import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'klist',
  title: 'Klist',
  description: 'A collection of klist resources and tools',
  keywords: ['klist'],
  category: 'Tool Commands',
  component: () => import('./klist.vue'),
  icon: Terminal,
};



