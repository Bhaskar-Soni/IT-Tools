import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'report',
  slug: 'q1-security-posture-report',
  title: 'Q1 Security Posture Report',
  description: 'A collection of q1 security posture report resources and tools',
  keywords: ['q1-security-posture-report'],
  category: 'Security',
  component: () => import('./q1-security-posture-report.vue'),
  icon: FileText,
};

