import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'get-help',
  title: 'Get Help',
  description: 'A collection of get help resources and tools',
  keywords: ['get-help'],
  category: 'Windows Commands',
  component: () => import('./get-help.vue'),
  icon: Terminal,
};

