import { Dimensions } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'rem-px-converter',
  title: 'REM Pixel converter',
  description: 'Convert px to rem and vice versa',
  keywords: ['rem','px','converter'],
  component: () => import('./rem-px-converter.vue'),
  icon: Dimensions,
  category: 'Web',
};
