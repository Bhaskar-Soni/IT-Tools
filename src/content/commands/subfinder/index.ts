import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'subfinder',
  title: 'Subfinder',
  description: 'A collection of subfinder resources and tools',
  keywords: ['subfinder'],
  category: 'Linux Commands',
  component: () => import('./subfinder.vue'),
  icon: Terminal,
};

