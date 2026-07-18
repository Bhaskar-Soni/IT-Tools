import { ArrowsShuffle } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'morse-converter',
  title: 'Morse Code Converter',
  description: 'Encode/Decode to Morse code',
  keywords: ['morse','converter'],
  component: () => import('./morse-converter.vue'),
  icon: ArrowsShuffle,
  category: 'Text',
};
