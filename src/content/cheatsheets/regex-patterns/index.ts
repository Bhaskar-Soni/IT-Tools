import { FileDigit } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'regex-patterns',
  title: 'Regex Patterns Cheatsheet',
  description: 'Useful regular expression patterns reference',
  keywords: ['regex', 'pattern', 'matching', 'expression'],
  category: 'Development',
  component: () => import('./regex-patterns.vue'),
  icon: FileDigit,
};


