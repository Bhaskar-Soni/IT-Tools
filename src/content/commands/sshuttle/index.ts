import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'sshuttle',
  title: 'Sshuttle',
  description: 'A collection of sshuttle resources and tools',
  keywords: ['sshuttle'],
  category: 'Linux Commands',
  component: () => import('./sshuttle.vue'),
  icon: Terminal,
};

