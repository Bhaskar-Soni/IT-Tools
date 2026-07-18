import { Calendar } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'date-duration-calculator',
  title: 'Date+Durations Calculator',
  description: 'Add/substract durations from a specific date',
  keywords: ['date','duration','addition','calculator','units'],
  component: () => import('./date-duration-calculator.vue'),
  icon: Calendar,
  category: 'Datetime',
};
