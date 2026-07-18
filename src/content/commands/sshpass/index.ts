import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'sshpass',
  title: 'Sshpass',
  description: 'A collection of sshpass resources and tools',
  keywords: ['sshpass'],
  category: 'Linux Commands',
  component: () => import('./sshpass.vue'),
  icon: Terminal,
};

