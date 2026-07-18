import { Braces } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'nginx-formatter',
  title: 'Nginx formatter',
  description: 'Format/prettify Nginx configuration files',
  keywords: ['nginx','formatter','prettier'],
  component: () => import('./nginx-formatter.vue'),
  icon: Braces,
  category: 'Network',
};
