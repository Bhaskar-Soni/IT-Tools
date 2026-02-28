import { Code } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'script',
  slug: 'redis-backup-restore-helper',
  title: 'Redis Backup Restore Helper',
  description: 'Operational helper for Redis snapshot backup and controlled restore workflow.',
  keywords: ['redis', 'backup', 'restore', 'rdb', 'operations'],
  category: 'Automation',
  component: () => import('./redis-backup-restore-helper.vue'),
  icon: Code,
};

