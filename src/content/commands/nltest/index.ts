import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'nltest',
  title: 'Nltest',
  description: 'A collection of nltest resources and tools',
  keywords: ['nltest'],
  category: 'Tool Commands',
  component: () => import('./nltest.vue'),
  icon: Terminal,
};

