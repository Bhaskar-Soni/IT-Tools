import { Devices } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'mac-address-lookup',
  title: 'MAC address lookup',
  description: 'Find the vendor and manufacturer of a device by its MAC address.',
  keywords: ['mac','address','lookup','vendor','parser','manufacturer'],
  component: () => import('./mac-address-lookup.vue'),
  icon: Devices,
  category: 'Network',
};
