import { Maximize } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'image-resizer',
  title: 'Image resizer',
  description: 'Change the width and height of the image, preview and download it in the desired format.',
  keywords: ['image','resizer','favicon','jpg','jpeg','png','webp'],
  component: () => import('./image-resizer.vue'),
  icon: Maximize,
  category: 'Images',
};
