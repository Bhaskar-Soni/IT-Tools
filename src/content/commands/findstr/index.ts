import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'findstr',
  title: 'Findstr',
  description: 'A collection of findstr resources and tools',
  keywords: ['findstr'],
  category: 'Windows Commands',
  component: () => import('./findstr.vue'),
  icon: Terminal,
};

