import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'swap',
  title: 'Swap',
  description: 'A collection of swap resources and tools',
  keywords: ['swap'],
  category: 'Linux Commands',
  component: () => import('./swap.vue'),
  icon: Terminal,
};

