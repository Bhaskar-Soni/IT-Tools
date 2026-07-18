import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'ffuf',
  title: 'Ffuf',
  description: 'A collection of ffuf resources and tools',
  keywords: ['ffuf'],
  category: 'Tool Commands',
  component: () => import('./ffuf.vue'),
  icon: Terminal,
};

