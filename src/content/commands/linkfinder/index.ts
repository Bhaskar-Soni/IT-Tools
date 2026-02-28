import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'linkfinder',
  title: 'Linkfinder',
  description: 'A collection of linkfinder resources and tools',
  keywords: ['linkfinder'],
  category: 'Linux Commands',
  component: () => import('./linkfinder.vue'),
  icon: Terminal,
};

