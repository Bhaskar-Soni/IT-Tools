import { Book } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'guide',
  slug: 'create-and-edit-files',
  title: 'Create And Edit Files',
  description: 'A collection of create and edit files resources and tools',
  keywords: ['create-and-edit-files'],
  category: 'Beginner Guides',
  component: () => import('./create-and-edit-files.vue'),
  icon: Book,
};

