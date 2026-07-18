import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'yay',
  title: 'Yay',
  description: 'A collection of yay resources and tools',
  keywords: ['yay'],
  category: 'Linux Commands',
  component: () => import('./yay.vue'),
  icon: Terminal,
};

