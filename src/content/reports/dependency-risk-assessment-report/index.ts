import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'report',
  slug: 'dependency-risk-assessment-report',
  title: 'Dependency Risk Assessment Report',
  description: 'A collection of dependency risk assessment report resources and tools',
  keywords: ['dependency-risk-assessment-report'],
  category: 'Security',
  component: () => import('./dependency-risk-assessment-report.vue'),
  icon: FileText,
};

