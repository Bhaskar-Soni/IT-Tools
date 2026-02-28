import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'dirsearch',
  title: 'Dirsearch',
  description: 'A collection of dirsearch resources and tools',
  keywords: ['dirsearch'],
  category: 'Tool Commands',
  component: () => import('./dirsearch.vue'),
  icon: Terminal,
};

