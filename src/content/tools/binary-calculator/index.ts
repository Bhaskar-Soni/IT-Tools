import { Calculator } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'binary-calculator',
  title: 'Binary Calculator',
  description: 'Calculate bitwise/binary operations (AND, OR, XOR, NOT, shifts) between two numbers',
  keywords: ['binary','and','or','xor','not','bitwise','calculator'],
  component: () => import('./binary-calculator.vue'),
  icon: Calculator,
  category: 'Maths',
};
