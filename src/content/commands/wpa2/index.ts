import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'wpa2',
  title: 'Wpa2',
  description: 'A collection of wpa2 resources and tools',
  keywords: ['wpa2'],
  category: 'Linux Commands',
  component: () => import('./wpa2.vue'),
  icon: Terminal,
};

