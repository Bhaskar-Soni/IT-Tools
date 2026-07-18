import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'vncviewer',
  title: 'Vncviewer',
  description: 'A collection of vncviewer resources and tools',
  keywords: ['vncviewer'],
  category: 'Linux Commands',
  component: () => import('./vncviewer.vue'),
  icon: Terminal,
};

