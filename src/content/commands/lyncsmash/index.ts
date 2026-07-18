import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'lyncsmash',
  title: 'Lyncsmash',
  description: 'A collection of lyncsmash resources and tools',
  keywords: ['lyncsmash'],
  category: 'Linux Commands',
  component: () => import('./lyncsmash.vue'),
  icon: Terminal,
};

