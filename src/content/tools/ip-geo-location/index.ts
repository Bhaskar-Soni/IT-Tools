import { World } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'ip-geo-location',
  title: 'IP Geo Location',
  description: 'Retrieve information about an IPv4/6 address or domain location',
  keywords: ['ip','domain','geo','location'],
  component: () => import('./ip-geo-location.vue'),
  icon: World,
  category: 'Network',
};
