import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'wes',
  title: 'Wes',
  description: 'A collection of wes resources and tools',
  keywords: ['wes'],
  category: 'Linux Commands',
  component: () => import('./wes.vue'),
  icon: Terminal,
};

