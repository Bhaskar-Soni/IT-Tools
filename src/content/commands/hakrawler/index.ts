import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'hakrawler',
  title: 'Hakrawler',
  description: 'A collection of hakrawler resources and tools',
  keywords: ['hakrawler'],
  category: 'Tool Commands',
  component: () => import('./hakrawler.vue'),
  icon: Terminal,
};

