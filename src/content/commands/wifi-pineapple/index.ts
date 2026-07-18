import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'wifi-pineapple',
  title: 'Wifi Pineapple',
  description: 'A collection of wifi pineapple resources and tools',
  keywords: ['wifi-pineapple'],
  category: 'Linux Commands',
  component: () => import('./wifi-pineapple.vue'),
  icon: Terminal,
};

