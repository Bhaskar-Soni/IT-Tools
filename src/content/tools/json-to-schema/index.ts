import { Braces } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'json-to-schema',
  title: 'Json to Schema',
  description: 'Convert JSON data to JSON Schema, MySQL DDL, Mongoose Schema, Google BigQuery schema or ClickHouse Table Schema',
  keywords: ['json','schema','mysql','sql','ddl','mongoose','bigquery','clickhouse','table'],
  component: () => import('./json-to-schema.vue'),
  icon: Braces,
  category: 'JSON',
};
