import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'grep',
  title: 'Grep',
  description: 'A collection of grep resources and tools',
  keywords: ['grep'],
  category: 'Linux Commands',
  component: () => import('./grep.vue'),
  icon: Terminal,
};

