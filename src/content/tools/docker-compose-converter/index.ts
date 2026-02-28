import { BrandDocker } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'docker-compose-converter',
  title: 'Docker Compose Format Converter',
  description: 'Convert Docker Compose file between V1, 2.x, 3.x or CommonSpec and may expand ports/volumes syntaxes',
  keywords: ['docker','compose','converter'],
  component: () => import('./docker-compose-converter.vue'),
  icon: BrandDocker,
  category: 'Docker',
};
