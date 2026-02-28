import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'python',
  title: 'Python',
  description: 'A collection of python resources and tools',
  keywords: ['python'],
  category: 'Linux Commands',
  component: () => import('./python.vue'),
  icon: Terminal,
};

