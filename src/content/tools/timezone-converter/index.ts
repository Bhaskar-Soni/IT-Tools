import { CalendarTime } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'timezone-converter',
  title: 'Timezone Converter',
  description: 'Convert Date-Time from a timezone to others and get timezone vs countries infos',
  keywords: ['timezone','tz','date','time','country','converter'],
  component: () => import('./timezone-converter.vue'),
  icon: CalendarTime,
  category: 'Datetime',
};
