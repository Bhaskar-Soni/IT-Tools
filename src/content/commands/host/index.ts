import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'host',
  title: 'Host',
  description: 'A collection of host resources and tools',
  keywords: ['host'],
  category: 'Linux Commands',
  component: () => import('./host.vue'),
  icon: Terminal,
};

