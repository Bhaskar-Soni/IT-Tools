import { Alarm } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'cron-alarm',
  title: 'Cron/Weekday Alarm',
  description: 'Alarm based on time and weekdays expression',
  keywords: ['cron','week','day','alarm'],
  component: () => import('./cron-alarm.vue'),
  icon: Alarm,
  category: 'Datetime',
};
