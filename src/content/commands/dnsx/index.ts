import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'dnsx',
  title: 'Dnsx',
  description: 'A collection of dnsx resources and tools',
  keywords: ['dnsx'],
  category: 'Tool Commands',
  component: () => import('./dnsx.vue'),
  icon: Terminal,
};

