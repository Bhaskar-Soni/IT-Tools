import { Code } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'string-escaper',
  title: 'String Escaper',
  description: 'Escape string to code language version',
  keywords: ['string','code','escaper'],
  component: () => import('./string-escaper.vue'),
  icon: Code,
  category: 'Development',
};
