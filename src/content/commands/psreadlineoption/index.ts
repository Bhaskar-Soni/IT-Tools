import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'psreadlineoption',
  title: 'Psreadlineoption',
  description: 'A collection of psreadlineoption resources and tools',
  keywords: ['psreadlineoption'],
  category: 'Tool Commands',
  component: () => import('./psreadlineoption.vue'),
  icon: Terminal,
};

