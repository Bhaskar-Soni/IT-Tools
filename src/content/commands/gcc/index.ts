import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'gcc',
  title: 'Gcc',
  description: 'A collection of gcc resources and tools',
  keywords: ['gcc'],
  category: 'Linux Commands',
  component: () => import('./gcc.vue'),
  icon: Terminal,
};

