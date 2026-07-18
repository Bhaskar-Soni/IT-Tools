import { Code } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'script',
  slug: 'disk-usage-alert',
  title: 'Disk Usage Alert',
  description: 'Disk capacity monitoring script with threshold-based alerting and optional notifier command.',
  keywords: ['disk usage', 'alerts', 'monitoring', 'linux', 'filesystem'],
  category: 'Monitoring',
  component: () => import('./disk-usage-alert.vue'),
  icon: Code,
};

