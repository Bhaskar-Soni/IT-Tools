import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'su',
  title: 'Su',
  description: 'A collection of su resources and tools',
  keywords: ['su'],
  category: 'Cloud Commands',
  component: () => import('./su.vue'),
  icon: Terminal,
};

