import { CalendarStats } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'which-day',
  title: 'Which Day?',
  description: 'Given a day and month, and years range, list all day of week a given date is',
  keywords: ['which','weekday','date','year','day'],
  component: () => import('./which-day.vue'),
  icon: CalendarStats,
  category: 'Datetime',
};
