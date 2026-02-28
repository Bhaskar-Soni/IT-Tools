import { Edit } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'nano',
  title: 'Nano Editor Cheatsheet',
  description: 'Nano text editor commands and shortcuts reference',
  keywords: ['nano', 'editor', 'text', 'commands'],
  category: 'Tools',
  component: () => import('./nano.vue'),
  icon: Edit,
};


