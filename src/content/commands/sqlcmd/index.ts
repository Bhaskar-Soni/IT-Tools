import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'sqlcmd',
  title: 'Sqlcmd',
  description: 'A collection of sqlcmd resources and tools',
  keywords: ['sqlcmd'],
  category: 'Windows Commands',
  component: () => import('./sqlcmd.vue'),
  icon: Terminal,
};

