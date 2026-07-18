import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'sqlmap',
  title: 'Sqlmap',
  description: 'A collection of sqlmap resources and tools',
  keywords: ['sqlmap'],
  category: 'Linux Commands',
  component: () => import('./sqlmap.vue'),
  icon: Terminal,
};

