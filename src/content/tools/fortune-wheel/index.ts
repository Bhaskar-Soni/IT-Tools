import { ArrowsShuffle } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'fortune-wheel',
  title: 'Fortune wheel',
  description: 'A configurable fortune wheel',
  keywords: ['fortune','wheel'],
  component: () => import('./fortune-wheel.vue'),
  icon: ArrowsShuffle,
  category: 'Gaming',
};
