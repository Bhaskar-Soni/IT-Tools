import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'mogrify',
  title: 'Mogrify',
  description: 'A collection of mogrify resources and tools',
  keywords: ['mogrify'],
  category: 'Linux Commands',
  component: () => import('./mogrify.vue'),
  icon: Terminal,
};

