import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'spartacus',
  title: 'Spartacus',
  description: 'A collection of spartacus resources and tools',
  keywords: ['spartacus'],
  category: 'Tool Commands',
  component: () => import('./spartacus.vue'),
  icon: Terminal,
};

