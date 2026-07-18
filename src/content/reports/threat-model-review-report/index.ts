import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'report',
  slug: 'threat-model-review-report',
  title: 'Threat Model Review Report',
  description: 'A collection of threat model review report resources and tools',
  keywords: ['threat-model-review-report'],
  category: 'Risk',
  component: () => import('./threat-model-review-report.vue'),
  icon: FileText,
};

