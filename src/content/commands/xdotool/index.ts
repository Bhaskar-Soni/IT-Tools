import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'xdotool',
  title: 'Xdotool',
  description: 'A collection of xdotool resources and tools',
  keywords: ['xdotool'],
  category: 'Linux Commands',
  component: () => import('./xdotool.vue'),
  icon: Terminal,
};

