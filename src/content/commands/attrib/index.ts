import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'attrib',
  title: 'Attrib',
  description: 'A collection of attrib resources and tools',
  keywords: ['attrib'],
  category: 'Windows Commands',
  component: () => import('./attrib.vue'),
  icon: Terminal,
};

