import { Shield } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'policy',
  slug: 'incident-response-policy',
  title: 'Incident Response Policy',
  description: 'A collection of incident response policy resources and tools',
  keywords: ['incident-response-policy'],
  category: 'Security',
  component: () => import('./incident-response-policy.vue'),
  icon: Shield,
};

