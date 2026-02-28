import { CalendarTime } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'duration-calculator',
  title: 'Duration Calculator',
  description: 'Calculate/parse durations',
  keywords: ['duration','iso','8601','time','calculator','units'],
  component: () => import('./duration-calculator.vue'),
  icon: CalendarTime,
  category: 'Datetime',
};
