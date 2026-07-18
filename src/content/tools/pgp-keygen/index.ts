import { Certificate } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'pgp-key-pair-generator',
  title: 'PGP keygen',
  description: 'Generate new random PGP private and public keys (with or without passphrase).',
  keywords: ['pgp','key','pair','generator','public','private','secret','ssh','pem','passphrase','password'],
  component: () => import('./pgp-keygen.vue'),
  icon: Certificate,
  category: 'Uncategorized',
};
