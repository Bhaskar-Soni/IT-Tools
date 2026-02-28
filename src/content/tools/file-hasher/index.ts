import { EyeOff } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'file-hasher',
  title: 'File Hasher',
  description: 'Compute Hash of files',
  keywords: ['file','hash','digest','crypto','security','text','MD5','SHA1','SHA256','SHA224','SHA512','SHA384','SHA3','RIPEMD160','ADLER32','BLAKE2B','BLAKE2S','BLAKE3','CRC32','CRC32C','KECCAK','PBKDF2','SM3','WHIRLPOOL','XXHASH128','XXHASH3','XXHASH32','XXHASH64'],
  component: () => import('./file-hasher.vue'),
  icon: EyeOff,
  category: 'Crypto',
};
