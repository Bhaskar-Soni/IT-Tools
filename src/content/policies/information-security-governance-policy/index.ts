import { Shield } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'policy',
  slug: 'information-security-governance-policy',
  title: 'Information Security Governance Policy',
  description: 'A collection of information security governance policy resources and tools',
  keywords: ['information-security-governance-policy'],
  category: 'Governance',
  component: () => import('./information-security-governance-policy.vue'),
  icon: Shield,
};

