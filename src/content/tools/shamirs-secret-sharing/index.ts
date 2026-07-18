import { Share } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'shamirs-secret-sharing',
  title: 'Shamirs Secret Sharing',
  description: 'Share and recompose a secret using Shamir\'s Secret Sharing scheme',
  keywords: ['shamirs','secret','sharing','cryptography'],
  component: () => import('./shamirs-secret-sharing.vue'),
  icon: Share,
  category: 'Crypto',
};
