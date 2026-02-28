import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'get-spns',
  title: 'Get Spns',
  description: 'A collection of get spns resources and tools',
  keywords: ['get-spns'],
  category: 'Windows Commands',
  component: () => import('./get-spns.vue'),
  icon: Terminal,
};

