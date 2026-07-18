import { PictureInPictureOff } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'remove-exif',
  title: 'Remove EXIF',
  description: 'Remove Exif from JPEG Files',
  keywords: ['remove','exif','jpeg'],
  component: () => import('./remove-exif.vue'),
  icon: PictureInPictureOff,
  category: 'Images',
};
