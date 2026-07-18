import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'massdns',
  title: 'Massdns',
  description: 'A collection of massdns resources and tools',
  keywords: ['massdns'],
  category: 'Linux Commands',
  component: () => import('./massdns.vue'),
  icon: Terminal,
};

