import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'swaks',
  title: 'Swaks',
  description: 'A collection of swaks resources and tools',
  keywords: ['swaks'],
  category: 'Linux Commands',
  component: () => import('./swaks.vue'),
  icon: Terminal,
};

