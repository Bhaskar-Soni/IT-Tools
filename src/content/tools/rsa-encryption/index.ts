import { Lock } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'rsa-encryption',
  title: 'RSA encryption',
  description: 'Encrypt and decrypt text clear text using RSA Keys.',
  keywords: ['rsa','encryption','cypher','encipher','crypt','decrypt'],
  component: () => import('./rsa-encryption.vue'),
  icon: Lock,
  category: 'Crypto',
};
