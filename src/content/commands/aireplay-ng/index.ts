import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'aireplay-ng',
  title: 'Aireplay Ng',
  description: 'A collection of aireplay ng resources and tools',
  keywords: ['aireplay-ng'],
  category: 'Linux Commands',
  component: () => import('./aireplay-ng.vue'),
  icon: Terminal,
};

