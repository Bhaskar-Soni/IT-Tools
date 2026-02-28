import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'davtest',
  title: 'Davtest',
  description: 'A collection of davtest resources and tools',
  keywords: ['davtest'],
  category: 'Linux Commands',
  component: () => import('./davtest.vue'),
  icon: Terminal,
};

