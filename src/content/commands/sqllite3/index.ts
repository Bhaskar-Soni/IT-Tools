import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'sqllite3',
  title: 'Sqllite3',
  description: 'A collection of sqllite3 resources and tools',
  keywords: ['sqllite3'],
  category: 'Linux Commands',
  component: () => import('./sqllite3.vue'),
  icon: Terminal,
};

