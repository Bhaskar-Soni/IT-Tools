import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'expand',
  title: 'Expand',
  description: 'A collection of expand resources and tools',
  keywords: ['expand'],
  category: 'Windows Commands',
  component: () => import('./expand.vue'),
  icon: Terminal,
};

