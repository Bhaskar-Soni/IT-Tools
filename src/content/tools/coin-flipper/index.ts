import { Coin } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'coin-flipper',
  title: 'Coin Flipper',
  description: 'Flip a coin',
  keywords: ['coin','flipper'],
  component: () => import('./coin-flipper.vue'),
  icon: Coin,
  category: 'Gaming',
};
