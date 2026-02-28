import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'report',
  slug: 'ci-cd-reliability-report',
  title: 'Ci Cd Reliability Report',
  description: 'A collection of ci cd reliability report resources and tools',
  keywords: ['ci-cd-reliability-report'],
  category: 'Operations',
  component: () => import('./ci-cd-reliability-report.vue'),
  icon: FileText,
};

