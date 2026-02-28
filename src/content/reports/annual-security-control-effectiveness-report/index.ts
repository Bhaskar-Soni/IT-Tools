import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'report',
  slug: 'annual-security-control-effectiveness-report',
  title: 'Annual Security Control Effectiveness Report',
  description: 'A collection of annual security control effectiveness report resources and tools',
  keywords: ['annual-security-control-effectiveness-report'],
  category: 'Security',
  component: () => import('./annual-security-control-effectiveness-report.vue'),
  icon: FileText,
};

