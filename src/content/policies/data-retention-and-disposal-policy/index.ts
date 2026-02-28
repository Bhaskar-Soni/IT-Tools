import { Shield } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'policy',
  slug: 'data-retention-and-disposal-policy',
  title: 'Data Retention And Disposal Policy',
  description: 'A collection of data retention and disposal policy resources and tools',
  keywords: ['data-retention-and-disposal-policy'],
  category: 'Data Protection',
  component: () => import('./data-retention-and-disposal-policy.vue'),
  icon: Shield,
};

