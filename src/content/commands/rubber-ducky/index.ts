import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'rubber-ducky',
  title: 'Rubber Ducky',
  description: 'A collection of rubber ducky resources and tools',
  keywords: ['rubber-ducky'],
  category: 'Tool Commands',
  component: () => import('./rubber-ducky.vue'),
  icon: Terminal,
};

