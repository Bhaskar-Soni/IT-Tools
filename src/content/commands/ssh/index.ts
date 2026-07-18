import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'ssh',
  title: 'Ssh',
  description: 'A collection of ssh resources and tools',
  keywords: ['ssh'],
  category: 'Linux Commands',
  component: () => import('./ssh.vue'),
  icon: Terminal,
};

