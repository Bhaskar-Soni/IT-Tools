import { DeviceDesktop } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'device-information',
  title: 'Device information',
  description: 'Get information about your current device (screen size, pixel-ratio, user agent, ...)',
  keywords: ['device','information','screen','pixel','ratio','status','data','computer','size','user','agent',],
  component: () => import('./device-information.vue'),
  icon: DeviceDesktop,
  category: 'Web',
};
