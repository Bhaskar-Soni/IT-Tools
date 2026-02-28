import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'scriptrunner',
  title: 'Scriptrunner',
  description: 'A collection of scriptrunner resources and tools',
  keywords: ['scriptrunner'],
  category: 'Tool Commands',
  component: () => import('./scriptrunner.vue'),
  icon: Terminal,
};

