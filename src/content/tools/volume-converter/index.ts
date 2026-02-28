import { Gauge } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'volume-converter',
  title: 'Volume Units Converter',
  description: 'Convert values from volume units',
  keywords: ['volume','converter','units','meter','stere','cubic','liter','barrel','gallon','pint','ounce','quart','m3',],
  component: () => import('./volume-converter.vue'),
  icon: Gauge,
  category: 'Physics',
};
