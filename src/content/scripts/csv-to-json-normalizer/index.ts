import { Code } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'script',
  slug: 'csv-to-json-normalizer',
  title: 'CSV to JSON Normalizer',
  description: 'Normalize CSV datasets into clean JSON with configurable type conversion rules.',
  keywords: ['csv', 'json', 'data normalization', 'python', 'data processing'],
  category: 'Data Processing',
  component: () => import('./csv-to-json-normalizer.vue'),
  icon: Code,
};

