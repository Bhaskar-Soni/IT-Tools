import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'awk',
  title: 'Awk',
  description: 'A collection of awk resources and tools',
  keywords: ['awk'],
  category: 'Linux Commands',
  component: () => import('./awk.vue'),
  icon: Terminal,
};

