import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'pandoc',
  title: 'Pandoc',
  description: 'A collection of pandoc resources and tools',
  keywords: ['pandoc'],
  category: 'Linux Commands',
  component: () => import('./pandoc.vue'),
  icon: Terminal,
};

