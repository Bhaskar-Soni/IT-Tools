import { Clock } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'mttdl-calculator',
  title: 'RAID Reliability Calculator',
  description: 'Computes storage system reliability using well-known MTTDL methodology',
  keywords: ['mttdl','raid','reliability','calculator'],
  component: () => import('./mttdl-calculator.vue'),
  icon: Clock,
  category: 'Network',
};
