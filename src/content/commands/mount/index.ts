import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'mount',
  title: 'Mount',
  description: 'A collection of mount resources and tools',
  keywords: ['mount'],
  category: 'Linux Commands',
  component: () => import('./mount.vue'),
  icon: Terminal,
};

