import { ArrowsShuffle } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'translator',
  title: 'Text Translator',
  description: 'Translate text from one language to another (using opus-mt)',
  keywords: ['translate','language'],
  component: () => import('./translator.vue'),
  icon: ArrowsShuffle,
  category: 'Text',
};
