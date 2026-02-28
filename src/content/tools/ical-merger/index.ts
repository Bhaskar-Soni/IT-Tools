import { CalendarPlus } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'ical-merger',
  title: 'iCal Merger',
  description: 'Merge many iCal file to a single',
  keywords: ['ical','ics','merger'],
  component: () => import('./ical-merger.vue'),
  icon: CalendarPlus,
  category: 'Datetime',
};
