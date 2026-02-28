import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'rshell',
  title: 'Rshell',
  description: 'A collection of rshell resources and tools',
  keywords: ['rshell'],
  category: 'Linux Commands',
  component: () => import('./rshell.vue'),
  icon: Terminal,
};

