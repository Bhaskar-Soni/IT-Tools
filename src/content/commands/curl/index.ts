import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'curl',
  title: 'Curl',
  description: 'A collection of curl resources and tools',
  keywords: ['curl'],
  category: 'Linux Commands',
  component: () => import('./curl.vue'),
  icon: Terminal,
};

