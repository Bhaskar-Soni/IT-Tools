import { Plug } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'rj45',
  title: 'RJ45 Connector Cheatsheet',
  description: 'RJ45 cable wiring and pin configuration reference',
  keywords: ['rj45', 'cable', 'networking', 'wiring'],
  category: 'Network',
  component: () => import('./rj45.vue'),
  icon: Plug,
};


