import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'get-gpinheritance',
  title: 'Get Gpinheritance',
  description: 'A collection of get gpinheritance resources and tools',
  keywords: ['get-gpinheritance'],
  category: 'Windows Commands',
  component: () => import('./get-gpinheritance.vue'),
  icon: Terminal,
};

