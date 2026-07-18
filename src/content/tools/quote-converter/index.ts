import { Quote } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'quote-converter',
  title: 'Quote Converter',
  description: 'Convert quoted strings between single and double quotes',
  keywords: ['quote','converter','quotes'],
  component: () => import('./quote-converter.vue'),
  icon: Quote,
  category: 'Development',
};
