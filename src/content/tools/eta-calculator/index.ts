import { Hourglass } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'eta-calculator',
  title: 'ETA calculator',
  description: 'An ETA (Estimated Time of Arrival) calculator to determine the approximate end time of a task, for example, the end time and duration of a file download.',
  keywords: ['eta','calculator','estimated','time','arrival','average'],
  component: () => import('./eta-calculator.vue'),
  icon: Hourglass,
  category: 'Datetime',
};
