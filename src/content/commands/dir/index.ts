import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'dir',
  title: 'Dir',
  description: 'A collection of dir resources and tools',
  keywords: ['dir'],
  category: 'Tool Commands',
  component: () => import('./dir.vue'),
  icon: Terminal,
};

