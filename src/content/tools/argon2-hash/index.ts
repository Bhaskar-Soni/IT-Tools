import { EyeOff } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'argon2-hash',
  title: 'Argon2 Hasher',
  description: 'Compute Argon2 hashes with parameters',
  keywords: ['argon2','argon2i','argon2d','argon2id','hash'],
  component: () => import('./argon2-hash.vue'),
  icon: EyeOff,
  category: 'Crypto',
};
