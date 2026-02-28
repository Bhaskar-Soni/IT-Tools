import { Calendar } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'week-number-converter',
  title: 'Week Numbers Converter',
  description: 'Convert between ISO Week number, Week number in month and date',
  keywords: ['week','month','number','iso','converter'],
  component: () => import('./week-number-converter.vue'),
  icon: Calendar,
  category: 'Datetime',
};
