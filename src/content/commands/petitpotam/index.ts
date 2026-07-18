import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'petitpotam',
  title: 'Petitpotam',
  description: 'A collection of petitpotam resources and tools',
  keywords: ['petitpotam'],
  category: 'Hunting Commands',
  component: () => import('./petitpotam.vue'),
  icon: Terminal,
};


