import { MathFunction } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'trigo-viewer',
  title: 'Trigonometric/Equation Curve Visualizer',
  description: 'Visualize trigonometric or equations depending on x',
  keywords: ['trigonometry','equation','curve','visualizer'],
  component: () => import('./trigo-viewer.vue'),
  icon: MathFunction,
  category: 'Maths',
};
