import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'enum4linux',
  title: 'Enum4linux',
  description: 'A collection of enum4linux resources and tools',
  keywords: ['enum4linux'],
  category: 'Tool Commands',
  component: () => import('./enum4linux.vue'),
  icon: Terminal,
};

