import { Shield } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'policy',
  slug: 'third-party-vendor-risk-policy',
  title: 'Third Party Vendor Risk Policy',
  description: 'A collection of third party vendor risk policy resources and tools',
  keywords: ['third-party-vendor-risk-policy'],
  category: 'Vendor Management',
  component: () => import('./third-party-vendor-risk-policy.vue'),
  icon: Shield,
};

