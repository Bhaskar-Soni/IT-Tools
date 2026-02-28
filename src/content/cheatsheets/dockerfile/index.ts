import { FileCode } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'dockerfile',
  title: 'Dockerfile Cheatsheet',
  description: 'Dockerfile syntax and best practices reference',
  keywords: ['dockerfile', 'docker', 'build', 'syntax'],
  category: 'DevOps',
  component: () => import('./dockerfile.vue'),
  icon: FileCode,
};


