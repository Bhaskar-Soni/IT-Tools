import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'unshadow',
  title: 'Unshadow',
  description: 'A collection of unshadow resources and tools',
  keywords: ['unshadow'],
  category: 'Linux Commands',
  component: () => import('./unshadow.vue'),
  icon: Terminal,
};

