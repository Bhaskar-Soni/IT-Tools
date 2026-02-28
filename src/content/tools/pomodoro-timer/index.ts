import { CalendarTime } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'pomodoro-timer',
  title: 'Pomodoro Timer',
  description: 'Basic Pomodoro Timer',
  keywords: ['pomodoro','timer'],
  component: () => import('./pomodoro-timer.vue'),
  icon: CalendarTime,
  category: 'Development',
};
