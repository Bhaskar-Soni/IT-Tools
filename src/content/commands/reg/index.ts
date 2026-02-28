import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'reg',
  title: 'Reg',
  description: 'A collection of reg resources and tools',
  keywords: ['reg'],
  category: 'Linux Commands',
  component: () => import('./reg.vue'),
  icon: Terminal,
};

