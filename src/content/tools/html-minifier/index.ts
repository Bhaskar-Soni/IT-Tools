import { BrandHtml5 } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'html-minifier',
  title: 'HTML Minifier',
  description: 'Minify HTML content',
  keywords: ['html','minifier'],
  component: () => import('./html-minifier.vue'),
  icon: BrandHtml5,
  category: 'Web',
};
