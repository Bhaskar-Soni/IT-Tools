import { Database } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'zpool',
  title: 'ZPool Cheatsheet',
  description: 'ZFS storage pool (zpool) management commands reference',
  keywords: ['zpool', 'zfs', 'storage', 'system'],
  category: 'System',
  component: () => import('./zpool.vue'),
  icon: Database,
};


