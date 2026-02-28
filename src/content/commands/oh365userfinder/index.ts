import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'oh365userfinder',
  title: 'Oh365userfinder',
  description: 'A collection of oh365userfinder resources and tools',
  keywords: ['oh365userfinder'],
  category: 'Cloud Commands',
  component: () => import('./oh365userfinder.vue'),
  icon: Terminal,
};


