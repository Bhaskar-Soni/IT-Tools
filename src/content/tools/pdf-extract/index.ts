import { FileExport } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'pdf-extract',
  title: 'Pdf Page Extractor',
  description: 'Extract pages range from a PDF',
  keywords: ['pdf','page','extract'],
  component: () => import('./pdf-extract.vue'),
  icon: FileExport,
  category: 'PDF',
};
