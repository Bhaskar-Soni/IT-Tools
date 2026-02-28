import { Box } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'kubernetes',
  title: 'Kubernetes Cheatsheet',
  description: 'Kubernetes (kubectl) commands and resources reference',
  keywords: ['kubernetes', 'k8s', 'docker', 'orchestration'],
  category: 'DevOps',
  component: () => import('./kubernetes.vue'),
  icon: Box,
};


