import { Barcode } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'gtin-validator',
  title: 'GTIN Validator',
  description: 'Validate and display information about GTIN (Global Trade Identifier Number formerly EAN Number), UPC and other product codes formats',
  keywords: ['gtin','validator','ean','trade','identifier'],
  component: () => import('./gtin-validator.vue'),
  icon: Barcode,
  category: 'Barcodes',
};
