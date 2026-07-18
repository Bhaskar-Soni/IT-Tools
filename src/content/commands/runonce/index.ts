import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'runonce',
  title: 'Runonce',
  description: 'A collection of runonce resources and tools',
  keywords: ['runonce'],
  category: 'Windows Commands',
  component: () => import('./runonce.vue'),
  icon: Terminal,
};

