import { Lock } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'rsa-ecdsa-signing',
  title: 'RSA/DSA/ECDSA Signer and Verifier',
  description: 'Sign data and verify signature using RSA/DSA/ECDSA Keys',
  keywords: ['rsa','dsa','ecdsa','ed25519','encryption','cypher','encipher','crypt','decrypt'],
  component: () => import('./rsa-ecdsa-signing.vue'),
  icon: Lock,
  category: 'Crypto',
};
