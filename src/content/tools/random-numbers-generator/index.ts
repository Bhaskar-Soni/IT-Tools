import { ArrowsShuffle } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'random-numbers-generator',
  title: 'Random numbers generator',
  description: '>-',
  keywords: ['random','numbers','decimal','hexadecimal','generator'],
  component: () => import('./random-numbers-generator.vue'),
  icon: ArrowsShuffle,
  category: 'Generators',
};
