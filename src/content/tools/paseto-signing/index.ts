import { Key } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'paseto-signing',
  title: 'Paseto/PASERK Public/Private',
  description: 'Generate public/private key pairs and sign/verify payload',
  keywords: ['paseto','signing','verify','paserk','payload'],
  component: () => import('./paseto-signing.vue'),
  icon: Key,
  category: 'Crypto',
};
