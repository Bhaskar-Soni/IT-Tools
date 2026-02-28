import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'report',
  slug: 'incident-response-exercise-report',
  title: 'Incident Response Exercise Report',
  description: 'A collection of incident response exercise report resources and tools',
  keywords: ['incident-response-exercise-report'],
  category: 'Engineering',
  component: () => import('./incident-response-exercise-report.vue'),
  icon: FileText,
};

