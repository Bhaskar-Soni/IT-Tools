import { Artboard } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'image-to-ascii-art',
  title: 'Image to ASCII Art',
  description: 'Image to ASCII Art Generator',
  keywords: ['image','ascii','art'],
  component: () => import('./image-to-ascii-art.vue'),
  icon: Artboard,
  category: 'Text',
};
