import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'dconf',
  title: 'Dconf',
  description: 'A collection of dconf resources and tools',
  keywords: ['dconf'],
  category: 'Linux Commands',
  component: () => import('./dconf.vue'),
  icon: Terminal,
};

