import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'favfreak',
  title: 'Favfreak',
  description: 'A collection of favfreak resources and tools',
  keywords: ['favfreak'],
  category: 'Tool Commands',
  component: () => import('./favfreak.vue'),
  icon: Terminal,
};

