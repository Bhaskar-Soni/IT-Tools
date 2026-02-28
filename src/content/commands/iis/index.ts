import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'iis',
  title: 'Iis',
  description: 'A collection of iis resources and tools',
  keywords: ['iis'],
  category: 'Windows Commands',
  component: () => import('./iis.vue'),
  icon: Terminal,
};

