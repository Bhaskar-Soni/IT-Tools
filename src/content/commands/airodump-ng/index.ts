import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'airodump-ng',
  title: 'Airodump Ng',
  description: 'A collection of airodump ng resources and tools',
  keywords: ['airodump-ng'],
  category: 'Linux Commands',
  component: () => import('./airodump-ng.vue'),
  icon: Terminal,
};

