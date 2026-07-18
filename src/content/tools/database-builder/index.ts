import { Database } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'database-builder',
  title: 'Database Creation Builder',
  description: 'Build SQL CREATE DATABASE queries for various databases',
  keywords: ['database','create','ddl','builder','mysql','mongodb','sqlserver','sqlite','postgresql'],
  component: () => import('./database-builder.vue'),
  icon: Database,
  category: 'Database',
};
