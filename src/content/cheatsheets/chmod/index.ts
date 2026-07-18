import { Lock } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'chmod',
  title: 'Chmod Cheatsheet',
  description: 'File permission reference using chmod command',
  keywords: ['chmod', 'permissions', 'file', 'system'],
  category: 'Commands',
  component: () => import('./chmod.vue'),
  icon: Lock,
};


