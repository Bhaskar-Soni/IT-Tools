import { Lock } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'password-strength-analyser',
  title: 'Password strength analyser',
  description: 'Discover the strength of your password with this client-side-only password strength analyser and crack time estimation tool.',
  keywords: ['password','strength','analyser','and','crack','time','estimation','brute','force','attack','entropy','cracking','hash','hashing','algorithm','algorithms','md5','sha1','sha256','sha512','bcrypt','scrypt','argon2','argon2id','argon2i','argon2d'],
  component: () => import('./password-strength-analyser.vue'),
  icon: Lock,
  category: 'Network',
};
