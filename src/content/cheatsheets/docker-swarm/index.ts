import { Box } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'docker-swarm',
  title: 'Docker Swarm Cheatsheet',
  description: 'Docker Swarm cluster management reference',
  keywords: ['docker', 'swarm', 'cluster', 'orchestration'],
  category: 'DevOps',
  component: () => import('./docker-swarm.vue'),
  icon: Box,
};


