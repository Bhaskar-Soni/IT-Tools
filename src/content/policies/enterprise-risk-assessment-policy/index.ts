import { Shield } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'policy',
  slug: 'enterprise-risk-assessment-policy',
  title: 'Enterprise Risk Assessment Policy',
  description: 'A collection of enterprise risk assessment policy resources and tools',
  keywords: ['enterprise-risk-assessment-policy'],
  category: 'Risk Management',
  component: () => import('./enterprise-risk-assessment-policy.vue'),
  icon: Shield,
};

