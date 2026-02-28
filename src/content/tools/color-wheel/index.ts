import { ColorPicker } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'color-wheel',
  title: 'Color Wheel',
  description: 'Choose a color palette/theme using a wheel and mode',
  keywords: ['color','wheel','palette','theme'],
  component: () => import('./color-wheel.vue'),
  icon: ColorPicker,
  category: 'Web',
};
