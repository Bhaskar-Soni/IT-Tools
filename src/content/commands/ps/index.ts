import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'ps',
  title: 'Ps',
  description: 'A collection of ps resources and tools',
  keywords: ['ps'],
  category: 'Hunting Commands',
  component: () => import('./ps.vue'),
  icon: Terminal,
};

