import { Shield } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'policy',
  slug: 'logging-and-monitoring-policy',
  title: 'Logging And Monitoring Policy',
  description: 'A collection of logging and monitoring policy resources and tools',
  keywords: ['logging-and-monitoring-policy'],
  category: 'Security',
  component: () => import('./logging-and-monitoring-policy.vue'),
  icon: Shield,
};

