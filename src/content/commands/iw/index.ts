import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'iw',
  title: 'Iw',
  description: 'A collection of iw resources and tools',
  keywords: ['iw'],
  category: 'Linux Commands',
  component: () => import('./iw.vue'),
  icon: Terminal,
};

