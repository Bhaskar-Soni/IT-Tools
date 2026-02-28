import { Clock } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'chronometer',
  title: 'Chronometer',
  description: 'Monitor the duration of a thing. Basically a chronometer with simple chronometer features.',
  keywords: ['chronometer','time','lap','duration','measure','pause','resume','stopwatch'],
  component: () => import('./chronometer.vue'),
  icon: Clock,
  category: 'Datetime',
};
