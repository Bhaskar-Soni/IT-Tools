import { Calendar } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'date-converter',
  title: 'Date-time converter',
  description: 'Convert date and time into the various different formats',
  keywords: ['date','time','converter','iso','utc','unix','epoch','timezone','year','month','day','minute','seconde','filetime','ldap','win32','units'],
  component: () => import('./date-time-converter.vue'),
  icon: Calendar,
  category: 'Uncategorized',
};
