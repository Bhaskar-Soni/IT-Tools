import { Book2 } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'citation-generator',
  title: 'Citation Generator',
  description: 'Generate citation of papers/books in MLA or APA format',
  keywords: ['citation','generator','apa','mla','bibliography'],
  component: () => import('./citation-generator.vue'),
  icon: Book2,
  category: 'Text',
};
