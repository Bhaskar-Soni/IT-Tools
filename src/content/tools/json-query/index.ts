import { Braces } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'json-query',
  title: 'Json Query',
  description: 'Run JSON Query lang on a given JSON content',
  keywords: ['json','query','jsonquery','lang'],
  component: () => import('./json-query.vue'),
  icon: Braces,
  category: 'JSON',
};
