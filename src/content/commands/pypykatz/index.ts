import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'pypykatz',
  title: 'Pypykatz',
  description: 'A collection of pypykatz resources and tools',
  keywords: ['pypykatz'],
  category: 'Hunting Commands',
  component: () => import('./pypykatz.vue'),
  icon: Terminal,
};


