import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'dig',
  title: 'Dig',
  description: 'A collection of dig resources and tools',
  keywords: ['dig'],
  category: 'Linux Commands',
  component: () => import('./dig.vue'),
  icon: Terminal,
};

