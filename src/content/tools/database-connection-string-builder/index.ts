import { Database } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'database-connection-string-builder',
  title: 'Database Connection String Builder',
  description: 'Build connection string for common database',
  keywords: ['database','connection','builder','mysql','mongodb','sqlserver','sqlite','postgresql'],
  component: () => import('./database-connection-string-builder.vue'),
  icon: Database,
  category: 'Database',
};
