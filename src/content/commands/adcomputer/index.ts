import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'adcomputer',
  title: 'Adcomputer',
  description: 'A collection of adcomputer resources and tools',
  keywords: ['adcomputer'],
  category: 'Tool Commands',
  component: () => import('./adcomputer.vue'),
  icon: Terminal,
};

