import { Percentage } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'percentage-calculator',
  title: 'Percentage calculator',
  description: 'Easily calculate percentages from a value to another value, or from a percentage to a value.',
  keywords: ['percentage','calculator','calculate','value','number','%'],
  component: () => import('./percentage-calculator.vue'),
  icon: Percentage,
  category: 'Measurement',
};
