import { FileZip } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'pdf-compressor',
  title: 'PDF Compressor',
  description: 'Optimize and compress PDF using Ghostscript',
  keywords: ['pdf','optimize','compressor'],
  component: () => import('./pdf-compressor.vue'),
  icon: FileZip,
  category: 'PDF',
};
