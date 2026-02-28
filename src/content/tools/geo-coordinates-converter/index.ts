import { World } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'geo-coordinates-converter',
  title: 'Geographic Coordinates Converter',
  description: 'Convert geographic coordinates between WGS84, GCJ02, BD09 and CGCS2000',
  keywords: ['geo','latitude','longitude','coordinates','converter'],
  component: () => import('./geo-coordinates-converter.vue'),
  icon: World,
  category: 'Converters',
};
