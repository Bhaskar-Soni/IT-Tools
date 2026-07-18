import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'quser',
  title: 'Quser',
  description: 'A collection of quser resources and tools',
  keywords: ['quser'],
  category: 'Windows Commands',
  component: () => import('./quser.vue'),
  icon: Terminal,
};

