import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'noseyparker',
  title: 'Noseyparker',
  description: 'A collection of noseyparker resources and tools',
  keywords: ['noseyparker'],
  category: 'Tool Commands',
  component: () => import('./noseyparker.vue'),
  icon: Terminal,
};

