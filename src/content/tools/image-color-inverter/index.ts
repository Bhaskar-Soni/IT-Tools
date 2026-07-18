import { Palette } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'image-color-inverter',
  title: 'Image Color Inverter',
  description: 'Invert the colors of an image to create a negative effect. Upload any image and instantly get the color-inverted version.',
  keywords: ['image','color','invert','negative','photo','filter','effect','png','jpg','jpeg'],
  component: () => import('./image-color-inverter.vue'),
  icon: Palette,
  category: 'Images',
};
