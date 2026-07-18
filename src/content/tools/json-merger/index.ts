import { Braces } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'json-merger',
  title: 'JSON Merger',
  description: 'Merge deeply two JSON content',
  keywords: ['json','merger'],
  component: () => import('./json-merger.vue'),
  icon: Braces,
  category: 'JSON',
};
