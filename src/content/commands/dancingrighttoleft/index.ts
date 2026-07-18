import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'dancingrighttoleft',
  title: 'Dancingrighttoleft',
  description: 'A collection of dancingrighttoleft resources and tools',
  keywords: ['dancingrighttoleft'],
  category: 'MISC Commands',
  component: () => import('./dancingrighttoleft.vue'),
  icon: Terminal,
};

