import type { ContentItem } from '@/core/content.types';
import { Lock } from '@vicons/tabler';

export const content: ContentItem = {
  type: 'policy',
  slug: 'password-policy',
  title: 'Password Policy (Corporate Standard)',
  description: 'Baseline password policy for internal accounts and systems.',
  keywords: ['policy', 'password', 'authentication', 'corporate'],
  component: () => import('./password-policy.vue'),
  icon: Lock,
  category: 'Security',
};
