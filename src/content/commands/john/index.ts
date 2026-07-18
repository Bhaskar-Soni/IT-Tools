import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'john',
  title: 'John',
  description: 'A collection of john resources and tools',
  keywords: ['john'],
  category: 'Linux Commands',
  component: () => import('./john.vue'),
  icon: Terminal,
};

