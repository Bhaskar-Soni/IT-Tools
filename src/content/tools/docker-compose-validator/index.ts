import { BrandDocker } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'docker-compose-validator',
  title: 'Docker Compose Validator',
  description: 'Validate Docker Compose files against CommonSpec schema',
  keywords: ['docker','compose','validator','commonspec'],
  component: () => import('./docker-compose-validator.vue'),
  icon: BrandDocker,
  category: 'Docker',
};
