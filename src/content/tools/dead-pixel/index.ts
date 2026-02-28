import { DeviceDesktop } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'dead-pixel',
  title: 'Dead pixel',
  description: 'Tool to check if a pixel on your screen is dead or not.',
  keywords: ['dead','pixel'],
  component: () => import('./dead-pixel.vue'),
  icon: DeviceDesktop,
  category: 'Forensic',
};
