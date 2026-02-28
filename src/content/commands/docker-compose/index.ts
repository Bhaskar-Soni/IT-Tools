import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'docker-compose',
  title: 'Docker Compose',
  description: 'A collection of docker compose resources and tools',
  keywords: ['docker-compose'],
  category: 'DevOps Commands',
  component: () => import('./docker-compose.vue'),
  icon: Terminal,
};

