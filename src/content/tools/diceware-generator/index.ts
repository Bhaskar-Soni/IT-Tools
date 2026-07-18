import { ArrowsShuffle } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'diceware-generator',
  title: 'Diceware Password Generator',
  description: 'Generate random password using Diceware method',
  keywords: ['diceware','generator'],
  component: () => import('./diceware-generator.vue'),
  icon: ArrowsShuffle,
  category: 'Generators',
};
