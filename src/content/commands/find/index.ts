import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'find',
  title: 'Find',
  description: 'A collection of find resources and tools',
  keywords: ['find'],
  category: 'Cloud Commands',
  component: () => import('./find.vue'),
  icon: Terminal,
};


