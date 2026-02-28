import { Barcode } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'barcode-reader',
  title: 'Barcode Reader',
  description: 'Barcode reader',
  keywords: ['barcode','reader'],
  component: () => import('./barcode-reader.vue'),
  icon: Barcode,
  category: 'Barcodes',
};
