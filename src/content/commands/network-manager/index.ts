import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'network-manager',
  title: 'Network Manager',
  description: 'A collection of network manager resources and tools',
  keywords: ['network-manager'],
  category: 'Linux Commands',
  component: () => import('./network-manager.vue'),
  icon: Terminal,
};

