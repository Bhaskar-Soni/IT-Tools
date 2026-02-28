import { Shield } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'policy',
  slug: 'secrets-management-policy',
  title: 'Secrets Management Policy',
  description: 'A collection of secrets management policy resources and tools',
  keywords: ['secrets-management-policy'],
  category: 'Security',
  component: () => import('./secrets-management-policy.vue'),
  icon: Shield,
};

