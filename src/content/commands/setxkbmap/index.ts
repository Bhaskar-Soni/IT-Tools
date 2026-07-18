import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'setxkbmap',
  title: 'Setxkbmap',
  description: 'A collection of setxkbmap resources and tools',
  keywords: ['setxkbmap'],
  category: 'Linux Commands',
  component: () => import('./setxkbmap.vue'),
  icon: Terminal,
};

