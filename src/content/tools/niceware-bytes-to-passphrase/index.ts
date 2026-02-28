import { Binary } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'niceware-bytes-to-passphrase',
  title: 'Niceware Bytes to Passphrase',
  description: 'Convert bytes array to passphrase and conversely',
  keywords: ['niceware','bytes','passphrase'],
  component: () => import('./niceware-bytes-to-passphrase.vue'),
  icon: Binary,
  category: 'Crypto',
};
