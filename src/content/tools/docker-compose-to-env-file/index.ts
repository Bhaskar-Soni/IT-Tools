import { BrandDocker } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'docker-compose-to-env-file',
  title: 'Docker Compose to .env file',
  description: 'Extract .env file from an existing Docker Compose file',
  keywords: ['docker','compose','env','environment'],
  component: () => import('./docker-compose-to-env-file.vue'),
  icon: BrandDocker,
  category: 'Docker',
};
