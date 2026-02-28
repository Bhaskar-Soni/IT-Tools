import { Shield } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'policy',
  slug: 'access-control-policy',
  title: 'Access Control Policy',
  description: 'A collection of access control policy resources and tools',
  keywords: ['access-control-policy'],
  category: 'Security',
  component: () => import('./access-control-policy.vue'),
  icon: Shield,
};

