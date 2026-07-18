import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'volumiser',
  title: 'Volumiser',
  description: 'A collection of volumiser resources and tools',
  keywords: ['volumiser'],
  category: 'Tool Commands',
  component: () => import('./volumiser.vue'),
  icon: Terminal,
};

