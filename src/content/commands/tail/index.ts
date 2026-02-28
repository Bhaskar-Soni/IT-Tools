import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'tail',
  title: 'Tail',
  description: 'A collection of tail resources and tools',
  keywords: ['tail'],
  category: 'Linux Commands',
  component: () => import('./tail.vue'),
  icon: Terminal,
};

