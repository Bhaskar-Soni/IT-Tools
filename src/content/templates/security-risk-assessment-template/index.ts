import { FileCheck } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'template',
  slug: 'security-risk-assessment-template',
  title: 'Security Risk Assessment Template',
  description: 'Risk assessment template with scoring model, treatment plans, and ownership tracking.',
  keywords: ['risk assessment', 'security governance', 'risk register', 'controls', 'template'],
  component: () => import('./security-risk-assessment-template.vue'),
  icon: FileCheck,
  category: 'Security',
};

