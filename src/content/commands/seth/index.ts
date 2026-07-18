import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'seth',
  title: 'Seth',
  description: 'A collection of seth resources and tools',
  keywords: ['seth'],
  category: 'Hunting Commands',
  component: () => import('./seth.vue'),
  icon: Terminal,
};


