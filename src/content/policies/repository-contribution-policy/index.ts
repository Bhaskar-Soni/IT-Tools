import { Shield } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'policy',
  slug: 'repository-contribution-policy',
  title: 'Repository Contribution Policy',
  description: 'A collection of repository contribution policy resources and tools',
  keywords: ['repository-contribution-policy'],
  category: 'Usage',
  component: () => import('./repository-contribution-policy.vue'),
  icon: Shield,
};

