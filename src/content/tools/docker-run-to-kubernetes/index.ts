import { BrandDocker } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'docker-run-to-kubernetes',
  title: 'Docker run to kubernetes',
  description: 'Docker run command(s) to Kubernetes manifests',
  keywords: ['docker','run','convert','kubernetes'],
  component: () => import('./docker-run-to-kubernetes.vue'),
  icon: BrandDocker,
  category: 'Docker',
};
