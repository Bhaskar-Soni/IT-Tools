import { Code } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'script',
  slug: 'docker-cleanup-prune',
  title: 'Docker Cleanup Prune',
  description: 'Reclaim Docker disk space by pruning old containers, images, networks, volumes, and cache.',
  keywords: ['docker', 'cleanup', 'prune', 'containers', 'disk space'],
  category: 'System',
  component: () => import('./docker-cleanup-prune.vue'),
  icon: Code,
};

