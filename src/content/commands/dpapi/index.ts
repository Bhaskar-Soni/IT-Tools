import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'dpapi',
  title: 'Dpapi',
  description: 'A collection of dpapi resources and tools',
  keywords: ['dpapi'],
  category: 'Hunting Commands',
  component: () => import('./dpapi.vue'),
  icon: Terminal,
};


