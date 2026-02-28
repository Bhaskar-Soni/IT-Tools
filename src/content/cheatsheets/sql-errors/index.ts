import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'sql-errors',
  title: 'Sql Errors',
  description: 'A collection of sql errors resources and tools',
  keywords: ['sql-errors'],
  category: 'WebApp Injections',
  component: () => import('./sql-errors.vue'),
  icon: FileText,
};

