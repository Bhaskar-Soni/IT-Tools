import { Engine } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'energy-computer',
  title: 'Energy Consumption and Expense Computer',
  description: 'Compute energy consumption and expense',
  keywords: ['energy','expense','watt','kwh','computer'],
  component: () => import('./energy-computer.vue'),
  icon: Engine,
  category: 'Converters',
};
