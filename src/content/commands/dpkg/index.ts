import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'dpkg',
  title: 'Dpkg',
  description: 'A collection of dpkg resources and tools',
  keywords: ['dpkg'],
  category: 'Linux Commands',
  component: () => import('./dpkg.vue'),
  icon: Terminal,
};

