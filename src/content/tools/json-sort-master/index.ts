import { ArrowsSort } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'json-sort-master',
  title: 'JSON sort master',
  description: 'Sort your JSON by keys and values.',
  keywords: ['json','sort'],
  component: () => import('./json-sort-master.vue'),
  icon: ArrowsSort,
  category: 'JSON',
};
