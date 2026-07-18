import { FileImport } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'pdf-concat',
  title: 'Pdf Concatener',
  description: 'Concatenate PDF into a single one',
  keywords: ['pdf','concat'],
  component: () => import('./pdf-concat.vue'),
  icon: FileImport,
  category: 'PDF',
};
