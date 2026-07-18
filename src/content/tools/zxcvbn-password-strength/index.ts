import { Lock } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'zxcvbn-password-strength',
  title: 'Zxcvbn Password Strength',
  description: 'Compute a given password strength using zxcvbn',
  keywords: ['zxcvbn','password','strength'],
  component: () => import('./zxcvbn-password-strength.vue'),
  icon: Lock,
  category: 'Network',
};
