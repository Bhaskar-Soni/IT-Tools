import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'column',
  title: 'Column',
  description: 'A collection of column resources and tools',
  keywords: ['column'],
  category: 'MISC Commands',
  component: () => import('./column.vue'),
  icon: Terminal,
};

