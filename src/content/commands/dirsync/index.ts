import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'dirsync',
  title: 'Dirsync',
  description: 'A collection of dirsync resources and tools',
  keywords: ['dirsync'],
  category: 'Tool Commands',
  component: () => import('./dirsync.vue'),
  icon: Terminal,
};

