import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'mergecap',
  title: 'Mergecap',
  description: 'A collection of mergecap resources and tools',
  keywords: ['mergecap'],
  category: 'Tool Commands',
  component: () => import('./mergecap.vue'),
  icon: Terminal,
};

