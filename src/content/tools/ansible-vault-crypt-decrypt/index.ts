import { LockSquare } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'ansible-vault-crypt-decrypt',
  title: 'Ansible vault crypt decrypt',
  description: 'Encrypt and decrypt Ansible Vault Secrets',
  keywords: ['ansible','vault','crypt','decrypt'],
  component: () => import('./ansible-vault-crypt-decrypt.vue'),
  icon: LockSquare,
  category: 'Crypto',
};
