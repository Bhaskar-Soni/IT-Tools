import { Braces } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'json-to-data',
  title: 'JSON to Data',
  description: 'Convert JSON to CSV, SQL Insert, YAML, Markdown, XML and XLSX',
  keywords: ['json','excel','csv','xlsx','sql','yaml','insert','markdown','md','tsv','xml'],
  component: () => import('./json-to-data.vue'),
  icon: Braces,
  category: 'JSON',
};
