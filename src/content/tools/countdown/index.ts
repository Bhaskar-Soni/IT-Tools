import { Alarm } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'countdown',
  title: 'Countdown',
  description: 'Countdown and alarm at ellapsed duration',
  keywords: ['countdown'],
  component: () => import('./countdown.vue'),
  icon: Alarm,
  category: 'Datetime',
};
