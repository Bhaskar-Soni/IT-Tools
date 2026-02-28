import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'rlwrap',
  title: 'Rlwrap',
  description: 'A collection of rlwrap resources and tools',
  keywords: ['rlwrap'],
  category: 'Linux Commands',
  component: () => import('./rlwrap.vue'),
  icon: Terminal,
};

