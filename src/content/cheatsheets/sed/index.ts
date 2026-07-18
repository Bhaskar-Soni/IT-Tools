import { Adjustments } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'sed',
  title: 'Sed Cheatsheet',
  description: 'Sed stream editor commands and patterns reference',
  keywords: ['sed', 'stream', 'editor', 'text'],
  category: 'Commands',
  component: () => import('./sed.vue'),
  icon: Adjustments,
};


