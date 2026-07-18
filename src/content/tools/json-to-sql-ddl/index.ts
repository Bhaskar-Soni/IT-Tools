import { Database } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'json-to-sql-ddl',
  title: 'Json to SQL DDL',
  description: 'JSON to SQL CREATE TABLE',
  keywords: ['json','sql','ddl','create','table'],
  component: () => import('./json-to-sql-ddl.vue'),
  icon: Database,
  category: 'JSON',
};
