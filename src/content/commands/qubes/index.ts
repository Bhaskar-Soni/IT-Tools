import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'qubes',
  title: 'Qubes',
  description: 'A collection of qubes resources and tools',
  keywords: ['qubes'],
  category: 'Tool Commands',
  component: () => import('./qubes.vue'),
  icon: Terminal,
};


