import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'nmcli',
  title: 'Nmcli',
  description: 'A collection of nmcli resources and tools',
  keywords: ['nmcli'],
  category: 'Linux Commands',
  component: () => import('./nmcli.vue'),
  icon: Terminal,
};

