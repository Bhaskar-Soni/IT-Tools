import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'report',
  slug: 'privacy-impact-assessment-report',
  title: 'Privacy Impact Assessment Report',
  description: 'A collection of privacy impact assessment report resources and tools',
  keywords: ['privacy-impact-assessment-report'],
  category: 'Compliance',
  component: () => import('./privacy-impact-assessment-report.vue'),
  icon: FileText,
};

