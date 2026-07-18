import { Code } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'script',
  slug: 'postgres-dump-rotation',
  title: 'Postgres Dump Rotation',
  description: 'Create compressed PostgreSQL backups and rotate old dumps by retention period.',
  keywords: ['postgres', 'backup', 'rotation', 'pg_dump', 'automation'],
  category: 'Automation',
  component: () => import('./postgres-dump-rotation.vue'),
  icon: Code,
};

