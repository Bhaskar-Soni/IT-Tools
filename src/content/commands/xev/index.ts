import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'xev',
  title: 'Xev',
  description: 'A collection of xev resources and tools',
  keywords: ['xev'],
  category: 'Linux Commands',
  component: () => import('./xev.vue'),
  icon: Terminal,
};

