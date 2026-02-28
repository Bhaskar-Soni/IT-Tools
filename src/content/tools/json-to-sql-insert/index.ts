import { DatabaseExport } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'json-to-sql-insert',
  title: 'Json to SQL INSERT',
  description: 'Convert JSON array to INSERT INTO',
  keywords: ['json','sql','insert'],
  component: () => import('./json-to-sql-insert.vue'),
  icon: DatabaseExport,
  category: 'Development',
};
