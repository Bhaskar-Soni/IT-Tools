import { ArrowsShuffle } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'csv-to-json',
  title: 'CSV to JSON',
  description: 'Convert CSV to JSON with automatic header detection.',
  keywords: ['csv','to','json','convert'],
  component: () => import('./csv-to-json.vue'),
  icon: ArrowsShuffle,
  category: 'JSON',
};
