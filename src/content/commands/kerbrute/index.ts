import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'kerbrute',
  title: 'Kerbrute',
  description: 'A collection of kerbrute resources and tools',
  keywords: ['kerbrute'],
  category: 'Hunting Commands',
  component: () => import('./kerbrute.vue'),
  icon: Terminal,
};


