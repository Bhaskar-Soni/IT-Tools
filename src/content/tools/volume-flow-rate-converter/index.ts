import { Wind } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'volume-flow-rate-converter',
  title: 'Volume Flow Rate Converter',
  description: 'Convert values between volume flow rate units',
  keywords: ['volume','flow','rate','converter','units','m3/s','l/s','tsp/s','in3/s','fl-oz/s','gal/s','ft3/s','yd3/s',],
  component: () => import('./volume-flow-rate-converter.vue'),
  icon: Wind,
  category: 'Physics',
};
