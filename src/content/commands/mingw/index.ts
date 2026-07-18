import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'mingw',
  title: 'Mingw',
  description: 'A collection of mingw resources and tools',
  keywords: ['mingw'],
  category: 'Linux Commands',
  component: () => import('./mingw.vue'),
  icon: Terminal,
};

