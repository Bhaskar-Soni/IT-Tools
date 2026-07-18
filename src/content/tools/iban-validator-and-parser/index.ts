import { BuildingBank } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'iban-validator-and-parser',
  title: 'IBAN validator and parser',
  description: 'Validate and parse IBAN numbers. Check if an IBAN is valid and get the country, BBAN, if it is a QR-IBAN and the IBAN friendly format.',
  keywords: ['iban','validator','and','parser','bic','bank'],
  component: () => import('./iban-validator-and-parser.vue'),
  icon: BuildingBank,
  category: 'Data',
};
