import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'usermod',
  title: 'Usermod',
  description: 'A collection of usermod resources and tools',
  keywords: ['usermod'],
  category: 'Linux Commands',
  component: () => import('./usermod.vue'),
  icon: Terminal,
};

