import { PictureInPicture } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'ico-converter',
  title: 'ICO/PNG converter',
  description: 'Convert from PNG/JPEG to/from ICO',
  keywords: ['ico','png','jpeg','icon','converter'],
  component: () => import('./ico-converter.vue'),
  icon: PictureInPicture,
  category: 'Images',
};
