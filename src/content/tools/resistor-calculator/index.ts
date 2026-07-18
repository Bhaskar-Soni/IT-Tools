import { Hammer } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'resistor-calculator',
  title: 'Resistor Calculator',
  description: 'Compute Resistor values from/to band colors',
  keywords: ['resistor','ohm','calculator'],
  component: () => import('./resistor-calculator.vue'),
  icon: Hammer,
  category: 'Forensic',
};
