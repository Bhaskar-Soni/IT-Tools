import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'tar',
  title: 'Tar',
  description: 'A collection of tar resources and tools',
  keywords: ['tar'],
  category: 'Windows Commands',
  component: () => import('./tar.vue'),
  icon: Terminal,
};


