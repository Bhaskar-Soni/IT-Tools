import { Certificate } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'rsa-key-pair-generator',
  title: 'RSA key pair generator',
  description: 'Generate a new random RSA private and public pem certificate key pair.',
  keywords: ['rsa','key','pair','generator','public','private','secret','ssh','pem','passphrase','password'],
  component: () => import('./rsa-key-pair-generator.vue'),
  icon: Certificate,
  category: 'Crypto',
};
