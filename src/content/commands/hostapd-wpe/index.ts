import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'hostapd-wpe',
  title: 'Hostapd Wpe',
  description: 'A collection of hostapd wpe resources and tools',
  keywords: ['hostapd-wpe'],
  category: 'Tool Commands',
  component: () => import('./hostapd-wpe.vue'),
  icon: Terminal,
};

