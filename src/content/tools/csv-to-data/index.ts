import { TableExport } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'csv-to-data',
  title: 'Csv to Data',
  description: 'Convert CSV file to JSON, YAML, CSV, SQL INSERT, XML, Markdown or XLSX',
  keywords: ['excel','csv','xlsx','sql','json','yaml','insert','markdown','md','tsv','xml'],
  component: () => import('./csv-to-data.vue'),
  icon: TableExport,
  category: 'Converters',
};
