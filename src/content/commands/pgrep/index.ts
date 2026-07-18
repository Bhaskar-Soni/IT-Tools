import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'pgrep',
  title: 'Pgrep',
  description: 'A collection of pgrep resources and tools',
  keywords: ['pgrep'],
  category: 'Linux Commands',
  component: () => import('./pgrep.vue'),
  icon: Terminal,
};

