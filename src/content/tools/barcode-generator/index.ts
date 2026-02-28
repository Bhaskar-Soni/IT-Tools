import { Barcode } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'barcode-generator',
  title: 'Barcode generator',
  description: 'Barcode generator',
  keywords: ['barcode','generator'],
  component: () => import('./barcode-generator.vue'),
  icon: Barcode,
  category: 'Barcodes',
};
