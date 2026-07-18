import { PictureInPicture } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'svg-previewer',
  title: 'SVG Previewer',
  description: 'Preview SVG files',
  keywords: ['svg','previewer'],
  component: () => import('./svg-previewer.vue'),
  icon: PictureInPicture,
  category: 'Images',
};
