import { PictureInPicture } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'image-converter',
  title: 'Image Formats Converter',
  description: 'Convert images from one format to another',
  keywords: ['image','svg','bmp','gif','ico','jpg','png','tga','pvr','tiff','pnm','pbm','pgm','ppm','psd','webp','converter'],
  component: () => import('./image-converter.vue'),
  icon: PictureInPicture,
  category: 'Images',
};
