import { Code } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'xml-formatter',
  title: 'XML formatter',
  description: 'Prettify your XML string into a friendly, human-readable format.',
  keywords: ['xml','prettify','format'],
  component: () => import('./xml-formatter.vue'),
  icon: Code,
  category: 'XML',
};
