import { FileCheck } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'template',
  slug: 'business-continuity-plan-template',
  title: 'Business Continuity Plan Template',
  description: 'Business continuity template covering recovery objectives, dependencies, and crisis communication.',
  keywords: ['business continuity', 'disaster recovery', 'rto', 'rpo', 'template'],
  component: () => import('./business-continuity-plan-template.vue'),
  icon: FileCheck,
  category: 'Operations',
};

