import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'git',
  title: 'Git',
  description: 'A collection of git resources and tools',
  keywords: ['git'],
  category: 'DevOps Commands',
  component: () => import('./git.vue'),
  icon: Terminal,
};

