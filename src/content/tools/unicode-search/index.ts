import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'unicode-search',
  title: 'Unicode Search',
  description: 'Search in Unicode Characters',
  keywords: ['unicode','search'],
  component: () => import('./unicode-search.vue'),
  icon: FileText,
  category: 'Data',
};
