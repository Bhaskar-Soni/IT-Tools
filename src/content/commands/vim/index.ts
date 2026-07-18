import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'vim',
  title: 'Vim',
  description: 'A collection of vim resources and tools',
  keywords: ['vim'],
  category: 'Linux Commands',
  component: () => import('./vim.vue'),
  icon: Terminal,
};

