import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'pacman',
  title: 'Pacman',
  description: 'A collection of pacman resources and tools',
  keywords: ['pacman'],
  category: 'Linux Commands',
  component: () => import('./pacman.vue'),
  icon: Terminal,
};

