import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'process',
  title: 'Process',
  description: 'A collection of process resources and tools',
  keywords: ['process'],
  category: 'Windows Commands',
  component: () => import('./process.vue'),
  icon: Terminal,
};

