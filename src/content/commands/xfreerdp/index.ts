import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'xfreerdp',
  title: 'Xfreerdp',
  description: 'A collection of xfreerdp resources and tools',
  keywords: ['xfreerdp'],
  category: 'Linux Commands',
  component: () => import('./xfreerdp.vue'),
  icon: Terminal,
};

