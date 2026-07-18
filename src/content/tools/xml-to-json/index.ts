import { Braces } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'xml-to-json',
  title: 'XML to JSON',
  description: 'Convert XML to JSON',
  keywords: ['xml','json'],
  component: () => import('./xml-to-json.vue'),
  icon: Braces,
  category: 'XML',
};
