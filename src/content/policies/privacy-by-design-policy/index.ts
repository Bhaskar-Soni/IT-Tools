import { Shield } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'policy',
  slug: 'privacy-by-design-policy',
  title: 'Privacy By Design Policy',
  description: 'A collection of privacy by design policy resources and tools',
  keywords: ['privacy-by-design-policy'],
  category: 'Privacy',
  component: () => import('./privacy-by-design-policy.vue'),
  icon: Shield,
};

