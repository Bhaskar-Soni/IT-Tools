import { TableExport } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'excel-to-data',
  title: 'Excel to data',
  description: 'Convert XLSX file to JSON, YAML, CSV, SQL INSERT, XML or Markdown',
  keywords: ['excel','csv','xlsx','sql','json','yaml','insert','markdown','md','tsv','xml'],
  component: () => import('./excel-to-data.vue'),
  icon: TableExport,
  category: 'Converters',
};
