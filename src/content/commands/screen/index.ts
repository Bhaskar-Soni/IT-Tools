import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'screen',
  title: 'Screen',
  description: 'A collection of screen resources and tools',
  keywords: ['screen'],
  category: 'Linux Commands',
  component: () => import('./screen.vue'),
  icon: Terminal,
};

