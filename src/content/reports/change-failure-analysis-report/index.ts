import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'report',
  slug: 'change-failure-analysis-report',
  title: 'Change Failure Analysis Report',
  description: 'A collection of change failure analysis report resources and tools',
  keywords: ['change-failure-analysis-report'],
  category: 'Operations',
  component: () => import('./change-failure-analysis-report.vue'),
  icon: FileText,
};

