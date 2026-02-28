import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'sprayingtoolkit',
  title: 'Sprayingtoolkit',
  description: 'A collection of sprayingtoolkit resources and tools',
  keywords: ['sprayingtoolkit'],
  category: 'Linux Commands',
  component: () => import('./sprayingtoolkit.vue'),
  icon: Terminal,
};

