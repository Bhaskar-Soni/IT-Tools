import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'list',
  slug: 'sql-data-types-quick-list',
  title: 'Sql Data Types Quick List',
  description: 'A collection of sql data types quick list resources and tools',
  keywords: ['sql-data-types-quick-list'],
  category: 'Databases',
  component: () => import('./sql-data-types-quick-list.vue'),
  icon: FileText,
};

