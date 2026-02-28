import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'powercat',
  title: 'Powercat',
  description: 'A collection of powercat resources and tools',
  keywords: ['powercat'],
  category: 'Tool Commands',
  component: () => import('./powercat.vue'),
  icon: Terminal,
};

