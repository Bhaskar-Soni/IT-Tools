import { List } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'list-comparer',
  title: 'Lists Comparer',
  description: 'Compare two list items',
  keywords: ['list','comparer'],
  component: () => import('./list-comparer.vue'),
  icon: List,
  category: 'Text',
};
