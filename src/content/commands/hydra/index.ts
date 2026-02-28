import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'hydra',
  title: 'Hydra',
  description: 'A collection of hydra resources and tools',
  keywords: ['hydra'],
  category: 'Tool Commands',
  component: () => import('./hydra.vue'),
  icon: Terminal,
};

