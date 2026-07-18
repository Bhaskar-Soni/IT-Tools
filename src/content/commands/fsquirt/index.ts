import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'fsquirt',
  title: 'Fsquirt',
  description: 'A collection of fsquirt resources and tools',
  keywords: ['fsquirt'],
  category: 'Windows Commands',
  component: () => import('./fsquirt.vue'),
  icon: Terminal,
};

