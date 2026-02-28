import { Power } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'force-converter',
  title: 'Force Units Converter',
  description: 'Convert values between force units',
  keywords: ['force','converter','units','newton','dyne','pond','ton-force',],
  component: () => import('./force-converter.vue'),
  icon: Power,
  category: 'Physics',
};
