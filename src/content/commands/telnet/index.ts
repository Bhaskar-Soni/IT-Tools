import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'telnet',
  title: 'Telnet',
  description: 'A collection of telnet resources and tools',
  keywords: ['telnet'],
  category: 'Linux Commands',
  component: () => import('./telnet.vue'),
  icon: Terminal,
};

