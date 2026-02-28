import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'lyncsniper',
  title: 'Lyncsniper',
  description: 'A collection of lyncsniper resources and tools',
  keywords: ['lyncsniper'],
  category: 'Tool Commands',
  component: () => import('./lyncsniper.vue'),
  icon: Terminal,
};

