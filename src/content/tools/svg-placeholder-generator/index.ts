import { Photo } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'svg-placeholder-generator',
  title: 'SVG placeholder generator',
  description: 'Generate svg images to use as a placeholder in your applications.',
  keywords: ['svg','placeholder','generator','image','size','mockup'],
  component: () => import('./svg-placeholder-generator.vue'),
  icon: Photo,
  category: 'Web',
};
