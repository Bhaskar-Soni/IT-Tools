import { List } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'json-to-csv',
  title: 'JSON to CSV',
  description: 'Convert JSON to CSV with automatic header detection.',
  keywords: ['json','to','csv','convert'],
  component: () => import('./json-to-csv.vue'),
  icon: List,
  category: 'JSON',
};
