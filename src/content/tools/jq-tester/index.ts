import { Braces } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'jq-tester',
  title: 'Jq/JSONPath Tester',
  description: 'Test jq/JSONPath expression against a JSON content',
  keywords: ['jq','json','tester','jsonpath','query','path'],
  component: () => import('./jq-tester.vue'),
  icon: Braces,
  category: 'JSON',
};
