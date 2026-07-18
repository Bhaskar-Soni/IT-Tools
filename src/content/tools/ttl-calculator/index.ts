import { CalendarTime } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'ttl-calculator',
  title: 'TTL calculator',
  description: 'TTL to Time converter',
  keywords: ['ttl','dns','calculator','time','live','duration'],
  component: () => import('./ttl-calculator.vue'),
  icon: CalendarTime,
  category: 'Datetime',
};
