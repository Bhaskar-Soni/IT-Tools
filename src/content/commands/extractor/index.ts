import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'extractor',
  title: 'Extractor',
  description: 'A collection of extractor resources and tools',
  keywords: ['extractor'],
  category: 'Tool Commands',
  component: () => import('./extractor.vue'),
  icon: Terminal,
};

