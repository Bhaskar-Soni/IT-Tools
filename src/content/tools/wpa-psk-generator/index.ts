import { Wifi } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'wpa-psk-generator',
  title: 'WPA PSK generator',
  description: 'WPA Pre-shared Key Generator to convert a WPA passphrase and SSID to the 256-bit pre-shared ("raw") key',
  keywords: ['wpa','psk','pre','shared','key','ssid','passphrase','generator'],
  component: () => import('./wpa-psk-generator.vue'),
  icon: Wifi,
  category: 'Network',
};
