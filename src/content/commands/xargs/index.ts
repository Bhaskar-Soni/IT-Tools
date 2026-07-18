import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'xargs',
  title: 'Xargs',
  description: 'A collection of xargs resources and tools',
  keywords: ['xargs'],
  category: 'Linux Commands',
  component: () => import('./xargs.vue'),
  icon: Terminal,
};

