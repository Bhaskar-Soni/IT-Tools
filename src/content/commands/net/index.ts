import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'net',
  title: 'Net',
  description: 'A collection of net resources and tools',
  keywords: ['net'],
  category: 'Hunting Commands',
  component: () => import('./net.vue'),
  icon: Terminal,
};

