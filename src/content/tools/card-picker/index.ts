import { PlayCard } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'card-picker',
  title: 'Card Picker',
  description: 'Generate a deck of playing cards',
  keywords: ['card','deck','picker'],
  component: () => import('./card-picker.vue'),
  icon: PlayCard,
  category: 'Gaming',
};
