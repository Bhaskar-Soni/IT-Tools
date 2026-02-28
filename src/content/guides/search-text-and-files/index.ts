import { Book } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'guide',
  slug: 'search-text-and-files',
  title: 'Search Text And Files',
  description: 'A collection of search text and files resources and tools',
  keywords: ['search-text-and-files'],
  category: 'Beginner Guides',
  component: () => import('./search-text-and-files.vue'),
  icon: Book,
};

