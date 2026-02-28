import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'msedge',
  title: 'Msedge',
  description: 'A collection of msedge resources and tools',
  keywords: ['msedge'],
  category: 'Windows Commands',
  component: () => import('./msedge.vue'),
  icon: Terminal,
};

