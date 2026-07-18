import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'webpalm',
  title: 'Webpalm',
  description: 'A collection of webpalm resources and tools',
  keywords: ['webpalm'],
  category: 'Linux Commands',
  component: () => import('./webpalm.vue'),
  icon: Terminal,
};

