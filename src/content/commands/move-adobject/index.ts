import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'move-adobject',
  title: 'Move Adobject',
  description: 'A collection of move adobject resources and tools',
  keywords: ['move-adobject'],
  category: 'Tool Commands',
  component: () => import('./move-adobject.vue'),
  icon: Terminal,
};

