import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'teamsuserenum',
  title: 'Teamsuserenum',
  description: 'A collection of teamsuserenum resources and tools',
  keywords: ['teamsuserenum'],
  category: 'Cloud Commands',
  component: () => import('./teamsuserenum.vue'),
  icon: Terminal,
};


