import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'wfuzz',
  title: 'Wfuzz',
  description: 'A collection of wfuzz resources and tools',
  keywords: ['wfuzz'],
  category: 'Linux Commands',
  component: () => import('./wfuzz.vue'),
  icon: Terminal,
};

