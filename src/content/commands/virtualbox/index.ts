import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'virtualbox',
  title: 'Virtualbox',
  description: 'A collection of virtualbox resources and tools',
  keywords: ['virtualbox'],
  category: 'Tool Commands',
  component: () => import('./virtualbox.vue'),
  icon: Terminal,
};


