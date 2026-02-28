import { Code } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'script',
  slug: 'backup-retention',
  title: 'Backup Retention',
  description: 'Automated backup creation with checksum generation and retention pruning.',
  keywords: ['backup', 'retention', 'tar', 'disaster recovery', 'automation'],
  category: 'Automation',
  component: () => import('./backup-retention.vue'),
  icon: Code,
};

