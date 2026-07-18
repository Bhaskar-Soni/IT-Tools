import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'report',
  slug: 'architecture-risk-and-technical-debt-report',
  title: 'Architecture Risk And Technical Debt Report',
  description: 'A collection of architecture risk and technical debt report resources and tools',
  keywords: ['architecture-risk-and-technical-debt-report'],
  category: 'Engineering',
  component: () => import('./architecture-risk-and-technical-debt-report.vue'),
  icon: FileText,
};

