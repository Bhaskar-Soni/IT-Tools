import { Certificate } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'ecdsa-key-pair-generator',
  title: 'ECDSA key pair generator',
  description: 'Generate new random ECDSA private and public keys (with or without passphrase).',
  keywords: ['ecdsa','key','pair','generator','public','private','secret','ssh','pem','passphrase','password'],
  component: () => import('./ecdsa-key-pair-generator.vue'),
  icon: Certificate,
  category: 'Crypto',
};
