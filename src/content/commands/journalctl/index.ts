import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'journalctl',
  title: 'Journalctl',
  description: 'A collection of journalctl resources and tools',
  keywords: ['journalctl'],
  category: 'Linux Commands',
  component: () => import('./journalctl.vue'),
  icon: Terminal,
};

