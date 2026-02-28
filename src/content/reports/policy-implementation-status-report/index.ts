import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'report',
  slug: 'policy-implementation-status-report',
  title: 'Policy Implementation Status Report',
  description: 'A collection of policy implementation status report resources and tools',
  keywords: ['policy-implementation-status-report'],
  category: 'Compliance',
  component: () => import('./policy-implementation-status-report.vue'),
  icon: FileText,
};

