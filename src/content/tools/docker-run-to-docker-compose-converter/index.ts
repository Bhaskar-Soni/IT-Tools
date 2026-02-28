import { BrandDocker } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'docker-run-to-docker-compose-converter',
  title: 'Docker run to Docker compose converter',
  description: 'Transforms "docker run" commands into docker-compose files!',
  keywords: ['docker','run','compose','yaml','yml','convert','deamon'],
  component: () => import('./docker-run-to-docker-compose-converter.vue'),
  icon: BrandDocker,
  category: 'Docker',
};
