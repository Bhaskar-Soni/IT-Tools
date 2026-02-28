import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'gittools',
  title: 'Gittools',
  description: 'A collection of gittools resources and tools',
  keywords: ['gittools'],
  category: 'Tool Commands',
  component: () => import('./gittools.vue'),
  icon: Terminal,
};

