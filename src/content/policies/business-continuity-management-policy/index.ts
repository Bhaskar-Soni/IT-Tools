import { Shield } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'policy',
  slug: 'business-continuity-management-policy',
  title: 'Business Continuity Management Policy',
  description: 'A collection of business continuity management policy resources and tools',
  keywords: ['business-continuity-management-policy'],
  category: 'Business Continuity',
  component: () => import('./business-continuity-management-policy.vue'),
  icon: Shield,
};

