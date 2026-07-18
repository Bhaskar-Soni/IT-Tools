import { Devices } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'mac-address-generator',
  title: 'MAC address generator',
  description: 'Enter the quantity and prefix. MAC addresses will be generated in your chosen case (uppercase or lowercase)',
  keywords: ['mac','address','generator','random','prefix'],
  component: () => import('./mac-address-generator.vue'),
  icon: Devices,
  category: 'Network',
};
