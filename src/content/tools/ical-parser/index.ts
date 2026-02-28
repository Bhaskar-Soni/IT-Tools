import { CalendarEvent } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'ical-parser',
  title: 'ICAL File Parser',
  description: 'Parse ICAL/ICS file to event display',
  keywords: ['ical','ics','calendar','parser'],
  component: () => import('./ical-parser.vue'),
  icon: CalendarEvent,
  category: 'Datetime',
};
