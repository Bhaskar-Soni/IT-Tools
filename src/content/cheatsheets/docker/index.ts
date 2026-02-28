import { Box } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'docker',
  title: 'Docker Cheatsheet',
  description: 'Docker commands and container management reference',
  keywords: ['docker', 'containers', 'devops', 'deployment'],
  category: 'DevOps',
  component: () => import('./docker.vue'),
  icon: Box,
};


