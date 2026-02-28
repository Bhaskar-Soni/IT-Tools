import { Angle } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'angle-converter',
  title: 'Angle Units Converter',
  description: 'Convert values between angle units',
  keywords: ['angle','converter','units','degree','radian','turn','grad',],
  component: () => import('./angle-converter.vue'),
  icon: Angle,
  category: 'Physics',
};
