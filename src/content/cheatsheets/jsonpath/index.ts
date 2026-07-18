import { FileAnalytics } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'jsonpath',
  title: 'JSONPath Cheatsheet',
  description: 'JSONPath query syntax and usage reference',
  keywords: ['jsonpath', 'json', 'query', 'xpath'],
  category: 'Development',
  component: () => import('./jsonpath.vue'),
  icon: FileAnalytics,
};


