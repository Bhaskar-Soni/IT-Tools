import { BrandDocker } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'docker-run-to-quadlets',
  title: 'Docker run to Quadlets',
  description: 'Convert docker run commands to Podman Quadlets',
  keywords: ['docker','run','podman','quadlets'],
  component: () => import('./docker-run-to-quadlets.vue'),
  icon: BrandDocker,
  category: 'Docker',
};
