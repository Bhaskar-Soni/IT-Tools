import { Shield } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'policy',
  slug: 'production-change-management-policy',
  title: 'Production Change Management Policy',
  description: 'A collection of production change management policy resources and tools',
  keywords: ['production-change-management-policy'],
  category: 'Change Management',
  component: () => import('./production-change-management-policy.vue'),
  icon: Shield,
};

