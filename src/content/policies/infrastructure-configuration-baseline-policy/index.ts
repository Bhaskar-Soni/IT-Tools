import { Shield } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'policy',
  slug: 'infrastructure-configuration-baseline-policy',
  title: 'Infrastructure Configuration Baseline Policy',
  description: 'A collection of infrastructure configuration baseline policy resources and tools',
  keywords: ['infrastructure-configuration-baseline-policy'],
  category: 'Infrastructure Security',
  component: () => import('./infrastructure-configuration-baseline-policy.vue'),
  icon: Shield,
};

