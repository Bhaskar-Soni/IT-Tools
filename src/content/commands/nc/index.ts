import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'nc',
  title: 'Nc',
  description: 'A collection of nc resources and tools',
  keywords: ['nc'],
  category: 'Linux Commands',
  component: () => import('./nc.vue'),
  icon: Terminal,
};

