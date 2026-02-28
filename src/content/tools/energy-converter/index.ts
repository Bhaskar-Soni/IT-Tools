import { Power } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'energy-converter',
  title: 'Energy Units Converter',
  description: 'Convert values between energy units',
  keywords: ['energy','converter','units','joule','watt-hour',],
  component: () => import('./energy-converter.vue'),
  icon: Power,
  category: 'Physics',
};
