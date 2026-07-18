import { EyeOff } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'age-crypto',
  title: 'AGE Cryptography',
  description: 'Provides a simple and easy-to-use open-source Age tool for generating keys, encrypting, and decrypting messages.',
  keywords: ['age'],
  component: () => import('./age-crypto.vue'),
  icon: EyeOff,
  category: 'Crypto',
};
