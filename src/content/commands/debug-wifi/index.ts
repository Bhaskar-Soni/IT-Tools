import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'debug-wifi',
  title: 'Debug Wifi',
  description: 'A collection of debug wifi resources and tools',
  keywords: ['debug-wifi'],
  category: 'Linux Commands',
  component: () => import('./debug-wifi.vue'),
  icon: Terminal,
};

