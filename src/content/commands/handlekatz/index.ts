import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'handlekatz',
  title: 'Handlekatz',
  description: 'A collection of handlekatz resources and tools',
  keywords: ['handlekatz'],
  category: 'Tool Commands',
  component: () => import('./handlekatz.vue'),
  icon: Terminal,
};

