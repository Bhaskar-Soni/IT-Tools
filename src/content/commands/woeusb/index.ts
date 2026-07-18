import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'woeusb',
  title: 'Woeusb',
  description: 'A collection of woeusb resources and tools',
  keywords: ['woeusb'],
  category: 'Linux Commands',
  component: () => import('./woeusb.vue'),
  icon: Terminal,
};

