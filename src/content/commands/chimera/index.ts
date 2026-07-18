import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'chimera',
  title: 'Chimera',
  description: 'A collection of chimera resources and tools',
  keywords: ['chimera'],
  category: 'Tool Commands',
  component: () => import('./chimera.vue'),
  icon: Terminal,
};

