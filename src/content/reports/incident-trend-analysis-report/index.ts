import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'report',
  slug: 'incident-trend-analysis-report',
  title: 'Incident Trend Analysis Report',
  description: 'A collection of incident trend analysis report resources and tools',
  keywords: ['incident-trend-analysis-report'],
  category: 'Operations',
  component: () => import('./incident-trend-analysis-report.vue'),
  icon: FileText,
};

