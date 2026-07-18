import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'fcrackzip',
  title: 'Fcrackzip',
  description: 'A collection of fcrackzip resources and tools',
  keywords: ['fcrackzip'],
  category: 'Tool Commands',
  component: () => import('./fcrackzip.vue'),
  icon: Terminal,
};

