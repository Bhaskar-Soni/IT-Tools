import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'createinstance',
  title: 'Createinstance',
  description: 'A collection of createinstance resources and tools',
  keywords: ['createinstance'],
  category: 'Windows Commands',
  component: () => import('./createinstance.vue'),
  icon: Terminal,
};

