import { BrandCss3 } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'image-to-css',
  title: 'Image to CSS',
  description: 'Convert image to CSS (url, background, ...)',
  keywords: ['image','css'],
  component: () => import('./image-to-css.vue'),
  icon: BrandCss3,
  category: 'Web',
};
