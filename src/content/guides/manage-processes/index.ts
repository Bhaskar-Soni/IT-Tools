import { Book } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'guide',
  slug: 'manage-processes',
  title: 'Manage Processes',
  description: 'A collection of manage processes resources and tools',
  keywords: ['manage-processes'],
  category: 'Beginner Guides',
  component: () => import('./manage-processes.vue'),
  icon: Book,
};

