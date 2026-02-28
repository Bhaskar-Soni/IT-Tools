import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'sed',
  title: 'Sed',
  description: 'A collection of sed resources and tools',
  keywords: ['sed'],
  category: 'Linux Commands',
  component: () => import('./sed.vue'),
  icon: Terminal,
};

