import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'split',
  title: 'Split',
  description: 'A collection of split resources and tools',
  keywords: ['split'],
  category: 'Linux Commands',
  component: () => import('./split.vue'),
  icon: Terminal,
};

