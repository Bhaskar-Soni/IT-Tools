import { PlugConnected } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'port-numbers',
  title: 'Port Numbers',
  description: 'Search for assigned usage of a given port and protocol',
  keywords: ['port','tcp','udp','protocol'],
  component: () => import('./port-numbers.vue'),
  icon: PlugConnected,
  category: 'Network',
};
