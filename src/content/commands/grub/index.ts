import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'grub',
  title: 'Grub',
  description: 'A collection of grub resources and tools',
  keywords: ['grub'],
  category: 'Linux Commands',
  component: () => import('./grub.vue'),
  icon: Terminal,
};

