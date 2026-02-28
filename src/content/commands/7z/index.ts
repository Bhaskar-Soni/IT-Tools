import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: '7z',
  title: '7z',
  description: 'A collection of 7z resources and tools',
  keywords: ['7z'],
  category: 'Linux Commands',
  component: () => import('./7z.vue'),
  icon: Terminal,
};

