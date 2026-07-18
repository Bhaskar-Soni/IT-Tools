import { Database } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'database-table-generator',
  title: 'Database Table Generator',
  description: 'Generate SQL CREATE TABLE for common databases',
  keywords: ['database','table','generator','mysql','mongodb','sqlserver','sqlite','postgresql'],
  component: () => import('./database-table-generator.vue'),
  icon: Database,
  category: 'Database',
};
