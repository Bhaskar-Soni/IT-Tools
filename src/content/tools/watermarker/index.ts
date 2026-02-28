import { Copyright } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'watermarker',
  title: 'Watermarker',
  description: 'Add watermark or logo to one or more images',
  keywords: ['watermarker'],
  component: () => import('./watermarker.vue'),
  icon: Copyright,
  category: 'Images',
};
