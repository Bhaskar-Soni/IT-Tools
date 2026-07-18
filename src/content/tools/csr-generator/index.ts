import { ArrowsShuffle } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'csr-generator',
  title: 'CSR Generator',
  description: 'Certificate Signing Request generator (PEM format)',
  keywords: ['csr','certificate','signing','request','x509','generator'],
  component: () => import('./csr-generator.vue'),
  icon: ArrowsShuffle,
  category: 'Crypto',
};
