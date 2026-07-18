import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'roadrecon',
  title: 'Roadrecon',
  description: 'A collection of roadrecon resources and tools',
  keywords: ['roadrecon'],
  category: 'Hunting Commands',
  component: () => import('./roadrecon.vue'),
  icon: Terminal,
};


