import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'aircrack-ng',
  title: 'Aircrack Ng',
  description: 'A collection of aircrack ng resources and tools',
  keywords: ['aircrack-ng'],
  category: 'Linux Commands',
  component: () => import('./aircrack-ng.vue'),
  icon: Terminal,
};

