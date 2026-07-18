import { FileExport } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'pdf-text-extractor',
  title: 'PDF Text Extractor',
  description: 'Extract text from PDF',
  keywords: ['pdf','text','extractor'],
  component: () => import('./pdf-text-extractor.vue'),
  icon: FileExport,
  category: 'PDF',
};
