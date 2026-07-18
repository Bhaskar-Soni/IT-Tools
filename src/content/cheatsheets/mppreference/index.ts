import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'mppreference',
  title: 'Mppreference',
  description: 'A collection of mppreference resources and tools',
  keywords: ['mppreference'],
  category: 'Windows Defense',
  component: () => import('./mppreference.vue'),
  icon: FileText,
};

