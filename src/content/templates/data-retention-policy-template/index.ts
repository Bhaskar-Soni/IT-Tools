import { FileCheck } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'template',
  slug: 'data-retention-policy-template',
  title: 'Data Retention Policy Template',
  description: 'Data retention policy template with legal-hold, archive, and secure disposal controls.',
  keywords: ['data retention', 'compliance', 'policy', 'records management', 'template'],
  component: () => import('./data-retention-policy-template.vue'),
  icon: FileCheck,
  category: 'Compliance',
};

