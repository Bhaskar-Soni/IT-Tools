import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'ss',
  title: 'Ss',
  description: 'A collection of ss resources and tools',
  keywords: ['ss'],
  category: 'Hunting Commands',
  component: () => import('./ss.vue'),
  icon: Terminal,
};

