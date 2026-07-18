import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'shutdown',
  title: 'Shutdown',
  description: 'A collection of shutdown resources and tools',
  keywords: ['shutdown'],
  category: 'Windows Commands',
  component: () => import('./shutdown.vue'),
  icon: Terminal,
};

