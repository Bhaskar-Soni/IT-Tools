import { GitCompare } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'image-comparer',
  title: 'Image Comparer',
  description: 'A tool to visualy compare images',
  keywords: ['image','comparer'],
  component: () => import('./image-comparer.vue'),
  icon: GitCompare,
  category: 'Images',
};
