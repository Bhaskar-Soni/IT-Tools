import { ReceiptTax } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'vat-validator',
  title: 'VAT Numbers Validator',
  description: 'Validate VAT Numbers',
  keywords: ['vat','validator'],
  component: () => import('./vat-validator.vue'),
  icon: ReceiptTax,
  category: 'Data',
};
