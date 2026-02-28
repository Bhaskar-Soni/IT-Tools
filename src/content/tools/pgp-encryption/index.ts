import { Lock } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'pgp-encryption',
  title: 'PGP encryption',
  description: 'Encrypt and decrypt text clear text using PGP Keys.',
  keywords: ['pgp','openpgp','encryption','cypher','encipher','crypt','decrypt'],
  component: () => import('./pgp-encryption.vue'),
  icon: Lock,
  category: 'Crypto',
};
