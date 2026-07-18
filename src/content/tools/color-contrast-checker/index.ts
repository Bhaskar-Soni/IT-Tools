import { ColorSwatch } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'color-contrast-checker',
  title: 'Color Contrast Checker',
  description: 'Check the WCAG contrast level between two colors',
  keywords: ['color','contrast','checker','wcag'],
  component: () => import('./color-contrast-checker.vue'),
  icon: ColorSwatch,
  category: 'Web',
};
