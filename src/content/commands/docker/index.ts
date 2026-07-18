import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'docker',
  title: 'Docker',
  description: 'A collection of docker resources and tools',
  keywords: ['docker'],
  category: 'DevOps Commands',
  component: () => import('./docker.vue'),
  icon: Terminal,
};

