import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'lynx',
  title: 'Lynx',
  description: 'A collection of lynx resources and tools',
  keywords: ['lynx'],
  category: 'Linux Commands',
  component: () => import('./lynx.vue'),
  icon: Terminal,
};

