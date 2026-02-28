import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'silentbridge',
  title: 'Silentbridge',
  description: 'A collection of silentbridge resources and tools',
  keywords: ['silentbridge'],
  category: 'Linux Commands',
  component: () => import('./silentbridge.vue'),
  icon: Terminal,
};

