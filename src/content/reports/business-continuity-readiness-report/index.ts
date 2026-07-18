import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'report',
  slug: 'business-continuity-readiness-report',
  title: 'Business Continuity Readiness Report',
  description: 'A collection of business continuity readiness report resources and tools',
  keywords: ['business-continuity-readiness-report'],
  category: 'Risk',
  component: () => import('./business-continuity-readiness-report.vue'),
  icon: FileText,
};

