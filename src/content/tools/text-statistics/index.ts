import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'text-statistics',
  title: 'Text statistics',
  description: 'Get information about a text, the number of characters, the number of words, its size in bytes, ...',
  keywords: ['text','statistics','length','characters','count','size','bytes'],
  component: () => import('./text-statistics.vue'),
  icon: FileText,
  category: 'Text',
};
