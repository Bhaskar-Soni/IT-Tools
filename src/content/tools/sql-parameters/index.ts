import { Database } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'sql-parameters',
  title: 'SQL Parameters Generator',
  description: 'Prepare SQL statement from a given parametrized SQL query and parameters',
  keywords: ['sql','select','insert','parameters'],
  component: () => import('./sql-parameters.vue'),
  icon: Database,
  category: 'Development',
};
