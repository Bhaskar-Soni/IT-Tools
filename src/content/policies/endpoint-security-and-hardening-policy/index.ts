import { Shield } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'policy',
  slug: 'endpoint-security-and-hardening-policy',
  title: 'Endpoint Security And Hardening Policy',
  description: 'A collection of endpoint security and hardening policy resources and tools',
  keywords: ['endpoint-security-and-hardening-policy'],
  category: 'Endpoint Security',
  component: () => import('./endpoint-security-and-hardening-policy.vue'),
  icon: Shield,
};

