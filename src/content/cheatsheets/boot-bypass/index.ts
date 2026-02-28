import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'boot-bypass',
  title: 'Boot Bypass',
  description: 'A collection of boot bypass resources and tools',
  keywords: ['boot-bypass'],
  category: 'OS System',
  component: () => import('./boot-bypass.vue'),
  icon: FileText,
};

