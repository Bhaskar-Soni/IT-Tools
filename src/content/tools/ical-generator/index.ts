import { CalendarEvent } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'ical-generator',
  title: 'ICAL Generator',
  description: 'Generate ICAL/ICS file from event infos',
  keywords: ['ical','calendar','event','generator'],
  component: () => import('./ical-generator.vue'),
  icon: CalendarEvent,
  category: 'Datetime',
};
