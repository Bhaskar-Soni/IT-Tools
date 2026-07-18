import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'ppldump',
  title: 'Ppldump',
  description: 'A collection of ppldump resources and tools',
  keywords: ['ppldump'],
  category: 'Tool Commands',
  component: () => import('./ppldump.vue'),
  icon: Terminal,
};

