import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'whatweb',
  title: 'Whatweb',
  description: 'A collection of whatweb resources and tools',
  keywords: ['whatweb'],
  category: 'Linux Commands',
  component: () => import('./whatweb.vue'),
  icon: Terminal,
};

