import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'list',
  slug: 'gb-to-mb-conversion-table',
  title: 'Gb To Mb Conversion Table',
  description: 'A collection of gb to mb conversion table resources and tools',
  keywords: ['gb-to-mb-conversion-table'],
  category: 'Uncategorized',
  component: () => import('./gb-to-mb-conversion-table.vue'),
  icon: FileText,
};

