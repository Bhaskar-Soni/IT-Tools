import { Alarm } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'time-alarm',
  title: 'Time Alarm',
  description: 'Alarm at a specific date and time',
  keywords: ['time','alarm'],
  component: () => import('./time-alarm.vue'),
  icon: Alarm,
  category: 'Datetime',
};
