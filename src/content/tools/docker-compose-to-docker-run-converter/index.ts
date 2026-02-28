import { BrandDocker } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'docker-compose-to-docker-run-converter',
  title: 'Docker Compose to Docker run converter',
  description: 'Turns Docker Compose filt to docker run command(s)!',
  keywords: ['docker','run','compose','yaml','yml','convert','deamon'],
  component: () => import('./docker-compose-to-docker-run-converter.vue'),
  icon: BrandDocker,
  category: 'Docker',
};
