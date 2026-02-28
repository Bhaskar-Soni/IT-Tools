import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'bbot',
  title: 'Bbot',
  description: 'A collection of bbot resources and tools',
  keywords: ['bbot'],
  category: 'Tool Commands',
  component: () => import('./bbot.vue'),
  icon: Terminal,
};

