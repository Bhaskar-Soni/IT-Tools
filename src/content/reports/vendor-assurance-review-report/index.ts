import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'report',
  slug: 'vendor-assurance-review-report',
  title: 'Vendor Assurance Review Report',
  description: 'A collection of vendor assurance review report resources and tools',
  keywords: ['vendor-assurance-review-report'],
  category: 'Risk',
  component: () => import('./vendor-assurance-review-report.vue'),
  icon: FileText,
};

