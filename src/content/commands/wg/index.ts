import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'wg',
  title: 'Wg',
  description: 'A collection of wg resources and tools',
  keywords: ['wg'],
  category: 'Linux Commands',
  component: () => import('./wg.vue'),
  icon: Terminal,
};

