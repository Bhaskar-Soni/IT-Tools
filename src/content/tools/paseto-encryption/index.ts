import { Key } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'paseto-encryption',
  title: 'Paseto/PASERK Local',
  description: 'Generate local keys and encrypt/decrypt payloads',
  keywords: ['paseto','encryption','paserk','payload'],
  component: () => import('./paseto-encryption.vue'),
  icon: Key,
  category: 'Crypto',
};
