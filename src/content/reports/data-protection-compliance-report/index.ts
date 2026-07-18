import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'report',
  slug: 'data-protection-compliance-report',
  title: 'Data Protection Compliance Report',
  description: 'A collection of data protection compliance report resources and tools',
  keywords: ['data-protection-compliance-report'],
  category: 'Compliance',
  component: () => import('./data-protection-compliance-report.vue'),
  icon: FileText,
};

