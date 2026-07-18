import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'tinyproxy',
  title: 'Tinyproxy',
  description: 'A collection of tinyproxy resources and tools',
  keywords: ['tinyproxy'],
  category: 'Linux Commands',
  component: () => import('./tinyproxy.vue'),
  icon: Terminal,
};

