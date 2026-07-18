import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'bitsadmin',
  title: 'Bitsadmin',
  description: 'A collection of bitsadmin resources and tools',
  keywords: ['bitsadmin'],
  category: 'Tool Commands',
  component: () => import('./bitsadmin.vue'),
  icon: Terminal,
};

