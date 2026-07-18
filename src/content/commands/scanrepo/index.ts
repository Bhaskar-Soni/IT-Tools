import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'scanrepo',
  title: 'Scanrepo',
  description: 'A collection of scanrepo resources and tools',
  keywords: ['scanrepo'],
  category: 'Tool Commands',
  component: () => import('./scanrepo.vue'),
  icon: Terminal,
};

