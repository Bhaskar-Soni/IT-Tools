import { Shield } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'policy',
  slug: 'regulatory-compliance-management-policy',
  title: 'Regulatory Compliance Management Policy',
  description: 'A collection of regulatory compliance management policy resources and tools',
  keywords: ['regulatory-compliance-management-policy'],
  category: 'Compliance',
  component: () => import('./regulatory-compliance-management-policy.vue'),
  icon: Shield,
};

