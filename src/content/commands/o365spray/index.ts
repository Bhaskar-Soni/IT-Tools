import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'o365spray',
  title: 'O365spray',
  description: 'A collection of o365spray resources and tools',
  keywords: ['o365spray'],
  category: 'Cloud Commands',
  component: () => import('./o365spray.vue'),
  icon: Terminal,
};


