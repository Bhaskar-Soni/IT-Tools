import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'rdesktop',
  title: 'Rdesktop',
  description: 'A collection of rdesktop resources and tools',
  keywords: ['rdesktop'],
  category: 'Linux Commands',
  component: () => import('./rdesktop.vue'),
  icon: Terminal,
};

