import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'mysqldump',
  title: 'Mysqldump',
  description: 'A collection of mysqldump resources and tools',
  keywords: ['mysqldump'],
  category: 'Linux Commands',
  component: () => import('./mysqldump.vue'),
  icon: Terminal,
};

