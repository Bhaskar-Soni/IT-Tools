import { CursorText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'extract-text-from-html',
  title: 'Extract text from HTML',
  description: '>-',
  keywords: ['extract','text','from','html'],
  component: () => import('./extract-text-from-html.vue'),
  icon: CursorText,
  category: 'Text',
};
