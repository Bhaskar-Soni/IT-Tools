import { AspectRatio } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'aspect-ratio-calculator',
  title: 'Aspect Ratio Calculator',
  description: 'Use this ratio calculator to check the dimensions when resizing images.',
  keywords: ['aspect','ratio','calculator'],
  component: () => import('./aspect-ratio-calculator.vue'),
  icon: AspectRatio,
  category: 'Measurement',
};
