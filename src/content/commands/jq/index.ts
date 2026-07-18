import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'jq',
  title: 'Jq',
  description: 'A collection of jq resources and tools',
  keywords: ['jq'],
  category: 'Linux Commands',
  component: () => import('./jq.vue'),
  icon: Terminal,
};

