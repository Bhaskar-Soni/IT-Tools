import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'wsgidav',
  title: 'Wsgidav',
  description: 'A collection of wsgidav resources and tools',
  keywords: ['wsgidav'],
  category: 'Linux Commands',
  component: () => import('./wsgidav.vue'),
  icon: Terminal,
};

