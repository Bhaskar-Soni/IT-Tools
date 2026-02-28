import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'crosslinked',
  title: 'Crosslinked',
  description: 'A collection of crosslinked resources and tools',
  keywords: ['crosslinked'],
  category: 'Tool Commands',
  component: () => import('./crosslinked.vue'),
  icon: Terminal,
};

