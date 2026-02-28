import { CurrencyYen } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'rmb-numbers',
  title: 'RMB Uppercase Converter',
  description: 'RMB/Renminbi Capitalization Conversion Tool',
  keywords: ['rmb','renminbi','cny','number','uppercase','人民币','大写','转换'],
  component: () => import('./rmb-numbers.vue'),
  icon: CurrencyYen,
  category: 'Data',
};
