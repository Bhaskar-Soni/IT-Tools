import { Clock } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'sla-calculator',
  title: 'SLA calculator',
  description: 'Service Level Agreement Calcultator',
  keywords: ['sla','service','level','agreement','calculator'],
  component: () => import('./sla-calculator.vue'),
  icon: Clock,
  category: 'Data',
};
