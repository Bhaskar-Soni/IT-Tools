import { Atom } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'mass-converter',
  title: 'Mass Units Converter',
  description: 'Convert values between mass units',
  keywords: ['mass','converter','units','gram','ton','tonne','pound','stone','ounce',],
  component: () => import('./mass-converter.vue'),
  icon: Atom,
  category: 'Physics',
};
