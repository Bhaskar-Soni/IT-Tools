import { BrandDocker } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'docker-compose-to-quadlets',
  title: 'Docker Compose to Quadlets',
  description: 'Convert Docker compose file content to Podman Quadlets',
  keywords: ['docker','compose','quadlets'],
  component: () => import('./docker-compose-to-quadlets.vue'),
  icon: BrandDocker,
  category: 'Docker',
};
