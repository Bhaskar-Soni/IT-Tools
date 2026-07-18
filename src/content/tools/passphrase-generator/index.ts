import { ArrowsShuffle } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'passphrase-generator',
  title: 'Passphrase Generator',
  description: 'Generate random memoizable Passphrases',
  keywords: ['passphrase','random','password','generator'],
  component: () => import('./passphrase-generator.vue'),
  icon: ArrowsShuffle,
  category: 'Generators',
};
