import { Disc } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'smart-raw-converter',
  title: 'SMART Raw Converter',
  description: 'Convert SMART Raw values to human readable',
  keywords: ['smart','raw','converter'],
  component: () => import('./smart-raw-converter.vue'),
  icon: Disc,
  category: 'Forensic',
};
