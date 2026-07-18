import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'qwinsta',
  title: 'Qwinsta',
  description: 'A collection of qwinsta resources and tools',
  keywords: ['qwinsta'],
  category: 'Windows Commands',
  component: () => import('./qwinsta.vue'),
  icon: Terminal,
};

