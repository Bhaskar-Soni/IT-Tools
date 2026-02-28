import { FileDigit } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'regex',
  title: 'Regular Expressions Cheatsheet',
  description: 'Common regex patterns and syntax reference',
  keywords: ['regex', 'pattern', 'matching', 'expression'],
  category: 'Development',
  component: () => import('./regex.vue'),
  icon: FileDigit,
};


