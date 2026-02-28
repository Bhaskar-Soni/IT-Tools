import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'leetlinked',
  title: 'Leetlinked',
  description: 'A collection of leetlinked resources and tools',
  keywords: ['leetlinked'],
  category: 'Linux Commands',
  component: () => import('./leetlinked.vue'),
  icon: Terminal,
};

