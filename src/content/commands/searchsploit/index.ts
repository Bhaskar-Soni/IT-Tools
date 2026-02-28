import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'searchsploit',
  title: 'Searchsploit',
  description: 'A collection of searchsploit resources and tools',
  keywords: ['searchsploit'],
  category: 'Linux Commands',
  component: () => import('./searchsploit.vue'),
  icon: Terminal,
};

