import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'copy',
  title: 'Copy',
  description: 'A collection of copy resources and tools',
  keywords: ['copy'],
  category: 'Windows Commands',
  component: () => import('./copy.vue'),
  icon: Terminal,
};

