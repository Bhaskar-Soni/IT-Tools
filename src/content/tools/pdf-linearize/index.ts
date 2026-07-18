import { FileLike } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'pdf-linearize',
  title: 'Pdf Linearize/FastWeb',
  description: 'Create a Linearized version of a PDF (turn to FastWeb)',
  keywords: ['pdf','linearize','fastweb'],
  component: () => import('./pdf-linearize.vue'),
  icon: FileLike,
  category: 'PDF',
};
