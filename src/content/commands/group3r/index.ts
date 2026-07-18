import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'group3r',
  title: 'Group3r',
  description: 'A collection of group3r resources and tools',
  keywords: ['group3r'],
  category: 'Tool Commands',
  component: () => import('./group3r.vue'),
  icon: Terminal,
};

