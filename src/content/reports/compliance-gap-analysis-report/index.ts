import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'report',
  slug: 'compliance-gap-analysis-report',
  title: 'Compliance Gap Analysis Report',
  description: 'A collection of compliance gap analysis report resources and tools',
  keywords: ['compliance-gap-analysis-report'],
  category: 'Compliance',
  component: () => import('./compliance-gap-analysis-report.vue'),
  icon: FileText,
};

