import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'static-ip-address',
  title: 'Static Ip Address',
  description: 'A collection of static ip address resources and tools',
  keywords: ['static-ip-address'],
  category: 'Linux Commands',
  component: () => import('./static-ip-address.vue'),
  icon: Terminal,
};

