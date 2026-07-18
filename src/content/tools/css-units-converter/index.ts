import { Dimensions } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'css-units-converter',
  title: 'CSS Units Converter',
  description: 'Convert values from common CSS units (em, rem, px, vw, vh, %)',
  keywords: ['css','units','converter'],
  component: () => import('./css-units-converter.vue'),
  icon: Dimensions,
  category: 'Web',
};
