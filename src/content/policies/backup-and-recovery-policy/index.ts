import { Shield } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'policy',
  slug: 'backup-and-recovery-policy',
  title: 'Backup And Recovery Policy',
  description: 'A collection of backup and recovery policy resources and tools',
  keywords: ['backup-and-recovery-policy'],
  category: 'Data Protection',
  component: () => import('./backup-and-recovery-policy.vue'),
  icon: Shield,
};

