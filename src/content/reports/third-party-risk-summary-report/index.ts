import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'report',
  slug: 'third-party-risk-summary-report',
  title: 'Third Party Risk Summary Report',
  description: 'A collection of third party risk summary report resources and tools',
  keywords: ['third-party-risk-summary-report'],
  category: 'Risk',
  component: () => import('./third-party-risk-summary-report.vue'),
  icon: FileText,
};

