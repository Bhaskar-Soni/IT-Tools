import { Rainbow } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'css-gradient-generator',
  title: 'CSS Gradient Generator',
  description: 'Generate CSS Gradient css code for a given set of steps and colors',
  keywords: ['css','gradient','generator'],
  component: () => import('./css-gradient-generator.vue'),
  icon: Rainbow,
  category: 'Web',
};
