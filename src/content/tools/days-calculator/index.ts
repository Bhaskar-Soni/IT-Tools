import { Calendar } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'days-calculator',
  title: 'Days Calculator',
  description: 'Calculate days interval, holidays, difference, business times',
  keywords: ['days','interval','month','year','difference','holidays','calculator'],
  component: () => import('./days-calculator.vue'),
  icon: Calendar,
  category: 'Datetime',
};
