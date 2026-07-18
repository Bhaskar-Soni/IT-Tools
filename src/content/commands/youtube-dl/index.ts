import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'youtube-dl',
  title: 'Youtube Dl',
  description: 'A collection of youtube dl resources and tools',
  keywords: ['youtube-dl'],
  category: 'Linux Commands',
  component: () => import('./youtube-dl.vue'),
  icon: Terminal,
};

