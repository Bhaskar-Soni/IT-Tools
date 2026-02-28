import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'regular-expressions',
  title: 'Regular Expressions',
  description: 'A collection of regular expressions resources and tools',
  keywords: ['regular-expressions'],
  category: 'Linux Commands',
  component: () => import('./regular-expressions.vue'),
  icon: Terminal,
};

