import { Speedboat } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'speed-converter',
  title: 'Speed Units Converter',
  description: 'Convert values between speed units',
  keywords: ['speed','converter','units','m/s','km/h','m/h','knot','ft/s',],
  component: () => import('./speed-converter.vue'),
  icon: Speedboat,
  category: 'Physics',
};
