import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'forkdump',
  title: 'Forkdump',
  description: 'A collection of forkdump resources and tools',
  keywords: ['forkdump'],
  category: 'Tool Commands',
  component: () => import('./forkdump.vue'),
  icon: Terminal,
};

