import { ArrowsShuffle } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'potrace',
  title: 'Image to SVG (potrace)',
  description: 'Convert an raster image to vectorial SVG',
  keywords: ['potrace','image','svg','raster','vectorial'],
  component: () => import('./potrace.vue'),
  icon: ArrowsShuffle,
  category: 'Images',
};
