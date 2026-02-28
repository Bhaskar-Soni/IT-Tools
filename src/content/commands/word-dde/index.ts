import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'word-dde',
  title: 'Word Dde',
  description: 'A collection of word dde resources and tools',
  keywords: ['word-dde'],
  category: 'Tool Commands',
  component: () => import('./word-dde.vue'),
  icon: Terminal,
};

