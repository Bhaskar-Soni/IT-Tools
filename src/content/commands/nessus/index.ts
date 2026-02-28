import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'nessus',
  title: 'Nessus',
  description: 'A collection of nessus resources and tools',
  keywords: ['nessus'],
  category: 'Tool Commands',
  component: () => import('./nessus.vue'),
  icon: Terminal,
};

