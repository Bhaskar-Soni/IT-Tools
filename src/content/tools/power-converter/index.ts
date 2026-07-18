import { Power } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'power-converter',
  title: 'Power Converter',
  description: 'Convert values between power units',
  keywords: ['power','converter','units','watt','horse',],
  component: () => import('./power-converter.vue'),
  icon: Power,
  category: 'Physics',
};
