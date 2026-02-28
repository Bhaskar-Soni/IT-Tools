import { Box } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'docker-compose',
  title: 'Docker Compose Cheatsheet',
  description: 'Docker Compose configuration and commands reference',
  keywords: ['docker', 'compose', 'containers', 'devops'],
  category: 'DevOps',
  component: () => import('./docker-compose.vue'),
  icon: Box,
};


