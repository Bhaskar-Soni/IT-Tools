import { Palette } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'color-converter',
  title: 'Color converter',
  description: 'Convert color between the different formats (hex, rgb, hsl and css name)',
  keywords: ['color','converter'],
  component: () => import('./color-converter.vue'),
  icon: Palette,
  category: 'Web',
};
