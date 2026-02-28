import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'socat',
  title: 'Socat',
  description: 'A collection of socat resources and tools',
  keywords: ['socat'],
  category: 'Linux Commands',
  component: () => import('./socat.vue'),
  icon: Terminal,
};

