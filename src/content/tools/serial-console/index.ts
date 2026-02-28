import { DeviceAnalytics } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'serial-console',
  title: 'Serial Port Console',
  description: 'Connect, read and send message to Serial Port',
  keywords: ['serial','port','console'],
  component: () => import('./serial-console.vue'),
  icon: DeviceAnalytics,
  category: 'Forensic',
};
