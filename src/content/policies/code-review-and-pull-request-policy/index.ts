import { Shield } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'policy',
  slug: 'code-review-and-pull-request-policy',
  title: 'Code Review And Pull Request Policy',
  description: 'A collection of code review and pull request policy resources and tools',
  keywords: ['code-review-and-pull-request-policy'],
  category: 'Usage',
  component: () => import('./code-review-and-pull-request-policy.vue'),
  icon: Shield,
};

