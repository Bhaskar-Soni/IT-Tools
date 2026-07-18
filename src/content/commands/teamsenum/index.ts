import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'teamsenum',
  title: 'Teamsenum',
  description: 'A collection of teamsenum resources and tools',
  keywords: ['teamsenum'],
  category: 'Cloud Commands',
  component: () => import('./teamsenum.vue'),
  icon: Terminal,
};


