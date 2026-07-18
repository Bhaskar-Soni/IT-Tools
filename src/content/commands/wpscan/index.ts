import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'wpscan',
  title: 'Wpscan',
  description: 'A collection of wpscan resources and tools',
  keywords: ['wpscan'],
  category: 'Linux Commands',
  component: () => import('./wpscan.vue'),
  icon: Terminal,
};

