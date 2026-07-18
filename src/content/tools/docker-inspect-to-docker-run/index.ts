import { BrandDocker } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'docker-inspect-to-docker-run',
  title: 'Docker inspect to Docker run',
  description: 'Convert docker inspect command json result back to Docker run command',
  keywords: ['docker','inspect','run'],
  component: () => import('./docker-inspect-to-docker-run.vue'),
  icon: BrandDocker,
  category: 'Docker',
};
