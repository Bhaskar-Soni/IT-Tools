import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'iptables',
  title: 'Iptables',
  description: 'A collection of iptables resources and tools',
  keywords: ['iptables'],
  category: 'Linux Commands',
  component: () => import('./iptables.vue'),
  icon: Terminal,
};

