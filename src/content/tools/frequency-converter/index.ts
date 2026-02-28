import { AntennaBars4 } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'frequency-converter',
  title: 'Frequency Units Converter',
  description: 'Convert values between frequency units',
  keywords: ['frequency','converter','units','hz','hertz','rpm','deg/s','rad/s',],
  component: () => import('./frequency-converter.vue'),
  icon: AntennaBars4,
  category: 'Physics',
};
