import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'registry',
  title: 'Registry',
  description: 'A collection of registry resources and tools',
  keywords: ['registry'],
  category: 'Tool Commands',
  component: () => import('./registry.vue'),
  icon: Terminal,
};

