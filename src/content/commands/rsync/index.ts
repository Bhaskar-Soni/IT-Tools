import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'rsync',
  title: 'Rsync',
  description: 'A collection of rsync resources and tools',
  keywords: ['rsync'],
  category: 'Linux Commands',
  component: () => import('./rsync.vue'),
  icon: Terminal,
};

