import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'joomscan',
  title: 'Joomscan',
  description: 'A collection of joomscan resources and tools',
  keywords: ['joomscan'],
  category: 'Tool Commands',
  component: () => import('./joomscan.vue'),
  icon: Terminal,
};

