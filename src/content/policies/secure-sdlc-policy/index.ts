import { Shield } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'policy',
  slug: 'secure-sdlc-policy',
  title: 'Secure Sdlc Policy',
  description: 'A collection of secure sdlc policy resources and tools',
  keywords: ['secure-sdlc-policy'],
  category: 'Secure Development',
  component: () => import('./secure-sdlc-policy.vue'),
  icon: Shield,
};

