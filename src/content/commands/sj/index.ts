import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'sj',
  title: 'Sj',
  description: 'A collection of sj resources and tools',
  keywords: ['sj'],
  category: 'Linux Commands',
  component: () => import('./sj.vue'),
  icon: Terminal,
};

