import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'spk',
  title: 'Spk',
  description: 'A collection of spk resources and tools',
  keywords: ['spk'],
  category: 'Linux Commands',
  component: () => import('./spk.vue'),
  icon: Terminal,
};

