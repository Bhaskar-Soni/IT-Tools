import { Currency } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'currency-converter',
  title: 'Currency Converter',
  description: 'Convert currency values using https://github.com/fawazahmed0/exchange-api',
  keywords: ['currency','converter','units'],
  component: () => import('./currency-converter.vue'),
  icon: Currency,
  category: 'Data',
};
