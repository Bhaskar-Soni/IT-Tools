import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'procdump',
  title: 'Procdump',
  description: 'A collection of procdump resources and tools',
  keywords: ['procdump'],
  category: 'Tool Commands',
  component: () => import('./procdump.vue'),
  icon: Terminal,
};

