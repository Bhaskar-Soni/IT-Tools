import { Lock } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'encryption',
  title: 'Encrypt / decrypt text',
  description: 'Encrypt clear text and decrypt ciphertext using crypto algorithms like AES, TripleDES, Rabbit or RC4.',
  keywords: ['cypher','encipher','text','AES','TripleDES','Rabbit','RC4','Salsa','ChaCha'],
  component: () => import('./encryption.vue'),
  icon: Lock,
  category: 'Crypto',
};
