import { Book } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'guide',
  slug: 'compress-and-extract-files',
  title: 'Compress And Extract Files',
  description: 'A collection of compress and extract files resources and tools',
  keywords: ['compress-and-extract-files'],
  category: 'Beginner Guides',
  component: () => import('./compress-and-extract-files.vue'),
  icon: Book,
};

