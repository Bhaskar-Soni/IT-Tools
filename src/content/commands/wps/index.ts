import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'wps',
  title: 'Wps',
  description: 'A collection of wps resources and tools',
  keywords: ['wps'],
  category: 'Linux Commands',
  component: () => import('./wps.vue'),
  icon: Terminal,
};

