import { Run } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'acceleration-converter',
  title: 'Acceleration Converter',
  description: 'Convert values between acceleration units',
  keywords: ['acceleration','converter','units','g(g-force)','m/s2',],
  component: () => import('./acceleration-converter.vue'),
  icon: Run,
  category: 'Physics',
};
