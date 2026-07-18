import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'report',
  slug: 'release-readiness-assessment-report',
  title: 'Release Readiness Assessment Report',
  description: 'A collection of release readiness assessment report resources and tools',
  keywords: ['release-readiness-assessment-report'],
  category: 'Operations',
  component: () => import('./release-readiness-assessment-report.vue'),
  icon: FileText,
};

