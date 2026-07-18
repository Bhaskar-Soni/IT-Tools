import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'nuclei',
  title: 'Nuclei',
  description: 'A collection of nuclei resources and tools',
  keywords: ['nuclei'],
  category: 'Tool Commands',
  component: () => import('./nuclei.vue'),
  icon: Terminal,
};

