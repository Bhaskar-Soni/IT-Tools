import { SquaresDiagonal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'area-converter',
  title: 'Area Units Converter',
  description: 'Convert values between area units',
  keywords: ['area','converter','units','squaremeter','are','square',],
  component: () => import('./area-converter.vue'),
  icon: SquaresDiagonal,
  category: 'Physics',
};
