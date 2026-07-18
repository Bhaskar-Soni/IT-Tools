import { BrandDocker } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'docker-compose-to-kubernetes',
  title: 'Docker compose to kubernetes',
  description: 'Docker Compose to Kubernetes manifests',
  keywords: ['docker','compose','convert','kubernetes'],
  component: () => import('./docker-compose-to-kubernetes.vue'),
  icon: BrandDocker,
  category: 'Docker',
};
