import { Database } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'sql-minifier',
  title: 'SQL Minifier',
  description: 'Minify SQL queries',
  keywords: ['sql','query','minifier'],
  component: () => import('./sql-minifier.vue'),
  icon: Database,
  category: 'Development',
};
