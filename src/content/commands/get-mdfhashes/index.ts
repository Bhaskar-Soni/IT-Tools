import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'get-mdfhashes',
  title: 'Get Mdfhashes',
  description: 'A collection of get mdfhashes resources and tools',
  keywords: ['get-mdfhashes'],
  category: 'Windows Commands',
  component: () => import('./get-mdfhashes.vue'),
  icon: Terminal,
};

