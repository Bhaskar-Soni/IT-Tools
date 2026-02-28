import { LockSquare } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'bcrypt',
  title: 'Bcrypt',
  description: 'Hash and compare text string using bcrypt. Bcrypt is a password-hashing function based on the Blowfish cipher.',
  keywords: ['bcrypt','hash','compare','password','salt','round','storage','crypto'],
  component: () => import('./bcrypt.vue'),
  icon: LockSquare,
  category: 'Crypto',
};
