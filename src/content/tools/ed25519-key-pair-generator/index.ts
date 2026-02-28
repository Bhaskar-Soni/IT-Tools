import { Certificate } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'ed25519-key-pair-generator',
  title: 'Ed25519 key pair generator',
  description: 'Generate new random Ed25519 private and public keys (with or without passphrase).',
  keywords: ['ed25519','key','pair','generator','public','private','secret','ssh','pem','passphrase','password'],
  component: () => import('./ed25519-key-pair-generator.vue'),
  icon: Certificate,
  category: 'Crypto',
};
