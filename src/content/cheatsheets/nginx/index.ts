import { Server } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'nginx',
  title: 'Nginx Cheatsheet',
  description: 'Nginx web server configuration and commands reference',
  keywords: ['nginx', 'server', 'web', 'configuration'],
  category: 'Tools',
  component: () => import('./nginx.vue'),
  icon: Server,
};


