import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'distinct-words',
  title: 'Distinct Words',
  description: 'Extract and count occurences of each unique word in a text',
  keywords: ['distinct','words'],
  component: () => import('./distinct-words.vue'),
  icon: FileText,
  category: 'Text',
};
