import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'date',
  title: 'Date',
  description: 'A collection of date resources and tools',
  keywords: ['date'],
  category: 'Linux Commands',
  component: () => import('./date.vue'),
  icon: Terminal,
};

