import { Dice } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'dice-roller',
  title: 'Dice Roller',
  description: 'RPG Dice Roller using Dice Notation',
  keywords: ['dice','rng','rpg','roller'],
  component: () => import('./dice-roller.vue'),
  icon: Dice,
  category: 'Gaming',
};
