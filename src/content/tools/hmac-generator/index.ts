import { Key } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'hmac-generator',
  title: 'Hmac generator',
  description: 'Computes a hash-based message authentication code (HMAC) using a secret key and your favorite hashing function.',
  keywords: ['hmac','generator','MD5','SHA1','SHA256','SHA224','SHA512','SHA384','SHA3','RIPEMD160'],
  component: () => import('./hmac-generator.vue'),
  icon: Key,
  category: 'Crypto',
};
