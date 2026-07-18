import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'report',
  slug: 'access-review-findings-report',
  title: 'Access Review Findings Report',
  description: 'A collection of access review findings report resources and tools',
  keywords: ['access-review-findings-report'],
  category: 'Security',
  component: () => import('./access-review-findings-report.vue'),
  icon: FileText,
};

