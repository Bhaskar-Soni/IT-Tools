import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'guestfist',
  title: 'Guestfist',
  description: 'A collection of guestfist resources and tools',
  keywords: ['guestfist'],
  category: 'Tool Commands',
  component: () => import('./guestfist.vue'),
  icon: Terminal,
};

